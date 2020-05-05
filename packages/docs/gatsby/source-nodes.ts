// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import { createCompiler } from '@mdx-js/mdx';
import { readdir, readFile } from 'fs';
import { extname, resolve } from 'path';
import detectFrontmatter from 'remark-frontmatter';
import vfile from 'vfile';

import { getDisplay, getFrontmatter } from './mdx-ast';
import { Content } from './document-field';

const mdxCompiler = createCompiler({ remarkPlugins: [detectFrontmatter] });

const read = async (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err: unknown, data: string) => {
      if (err) {
        reject(new Error(`ERROR reading file content ${err}`));
      }
      resolve(data);
    });
  });

const readDir = async (path: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    readdir(path, (err: unknown, files: string[]) => {
      if (err) {
        reject(new Error(`ERROR reading directory  ${err}`));
      }
      resolve(files);
    });
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function* collect(): AsyncGenerator<string, any, undefined> {
  const basePath = './content/';
  const dirs = await readDir(resolve(basePath));

  for await (const dir of dirs) {
    if (Boolean(extname(dir))) {
      yield await read(resolve(basePath, dir));
      break;
    }

    const files = await readDir(resolve(basePath, dir));
    for await (const file of files) {
      yield await read(resolve(basePath, dir, file));
    }
  }
}

const nodes = async (createNode): Promise<Map<string, Content[]> | void> => {
  try {
    const docs = new Map<string, Content[]>();
    const collectedData = await collect();

    for await (const data of collectedData) {
      const mdxAst = mdxCompiler.parse(vfile(data));
      const { name } = getFrontmatter(mdxAst);
      const content = { body: data, display: getDisplay(mdxAst) };

      if (docs.has(name) && Array.isArray(docs.get(name))) {
        docs.set(name, [...(docs.get(name) as Content[]), content]);
      } else {
        docs.set(name, [content]);
      }
    }
    console.log(docs, createNode, '********');
    return docs;
  } catch (err) {
    Promise.reject(new Error(`🚨 ERROR collecting content${err}`));
  }
};

exports.nodes = nodes;
