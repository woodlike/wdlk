// TODO: find why TS-Node cant find @mdx declaration file.
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import mdx, { createCompiler } from '@mdx-js/mdx';
import { Actions, NodeInput } from 'gatsby';
import { readdir, readFile } from 'fs';
import { extname, resolve } from 'path';
import { v3 as uuidv3 } from 'uuid';

import crypto from 'crypto';
import detectFrontmatter from 'remark-frontmatter';
import vfile from 'vfile';

import { getDisplay, getFrontmatter } from './mdx-utils';

export interface Doc {
  id: string;
  body: string;
  display?: string;
}

export type DocNode = NodeInput & { doc: Doc[] | undefined; name: string };

export type DocMap = Map<string, Doc[]>;

const mdxCompiler = createCompiler({ remarkPlugins: [detectFrontmatter] });

export const read = async (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err: unknown, data: string) => {
      if (err) {
        reject(new Error(`ERROR reading file content ${err}`));
      }
      resolve(data);
    });
  });

export const readDir = async (path: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    readdir(path, (err: unknown, files: string[]) => {
      if (err) {
        reject(new Error(`ERROR reading directory  ${err}`));
      }
      resolve(files);
    });
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function* collect(): AsyncGenerator<string, any, undefined> {
  const basePath = './content/';
  const dirs = await readDir(resolve(basePath));

  for await (const dir of dirs) {
    if (Boolean(extname(dir))) {
      yield await read(resolve(basePath, dir));
    } else {
      const files = await readDir(resolve(basePath, dir));
      for await (const file of files) {
        yield await read(resolve(basePath, dir, file));
      }
    }
  }
}

export async function createDocMap(): Promise<DocMap> {
  const docs = new Map<string, Doc[]>();
  const collectedData = await collect();
  for await (const data of collectedData) {
    const mdxAst = mdxCompiler.parse(vfile(data));
    const { name } = getFrontmatter(mdxAst);
    const jsx = await mdx(data);
    const content = {
      id: uuidv3(data, '56079aea-8fc9-11ea-bc55-0242ac130003'),
      body: jsx,
      display: getDisplay(mdxAst),
    };

    if (docs.has(name) && Array.isArray(docs.get(name))) {
      docs.set(name, [...(docs.get(name) as Doc[]), content]);
    } else {
      docs.set(name, [content]);
    }
  }
  return docs;
}

const onNodeSource = async (
  createNode: Actions['createNode'],
): Promise<void> => {
  try {
    const docs = await createDocMap();
    for await (const name of docs.keys()) {
      createNode({
        id: uuidv3(name, '56079aea-8fc9-11ea-bc55-0242ac130003'),
        parent: '',
        children: [],
        name,
        doc: docs.get(name),
        internal: {
          type: 'DocContent',
          contentDigest: crypto.createHash('sha256').update(name).digest('hex'),
        },
      });
    }
  } catch (err) {
    Promise.reject(new Error(`🚨 ERROR collecting content${err}`));
  }
};

exports.onNodeSource = onNodeSource;
