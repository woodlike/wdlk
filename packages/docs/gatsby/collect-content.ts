// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import { createCompiler } from '@mdx-js/mdx';
import { readdir, readFile } from 'fs';
import { extname, resolve } from 'path';
import detectFrontmatter from 'remark-frontmatter';
import vfile from 'vfile';
import { DocumentField } from './document-field';
import { getDisplay, getFrontmatter } from './mdx-ast';

const mdxCompiler = createCompiler({ remarkPlugins: [detectFrontmatter] });

const getContent = async (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err: unknown, data: string) => {
      if (err) {
        reject(new Error(`🚨 ERROR reading file content ${err}`));
      }
      resolve(data);
    });
  });

const getFileNames = async (path: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    readdir(path, (err: unknown, files: string[]) => {
      if (err) {
        reject(new Error(`🚨 ERROR reading directory  ${err}`));
      }
      resolve(files);
    });
  });

const createDocField = async (path: string, files: string[]): Promise<DocumentField[]> => {
  const contents = Promise.all(
    files.map(async file => {
      const data = await getContent(resolve(path, file));
      const mdxAst = mdxCompiler.parse(vfile(data));
      const { name } = getFrontmatter(mdxAst);
      return {
        name,
        content: [{ body: data, display: getDisplay(mdxAst) }],
      };
    }),
  );
  return Promise.resolve(contents) as Promise<DocumentField[]>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const foo = async (path: string, files: string[]): Promise<any> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contents = await files.reduce(async (prev: Promise<any>, curr: string) => {
    await prev;
    const data = await getContent(resolve(path, curr));
    const mdxAst = mdxCompiler.parse(vfile(data));
    const { name } = getFrontmatter(mdxAst);
    console.log(prev, '%%%%%%%%%%%%%', curr);
    return new Promise(resolve =>
      resolve({
        name,
        content: [{ body: data, display: getDisplay(mdxAst) }],
      }),
    );
  }, Promise.resolve([]));
  return contents;
};

const collect = async (): Promise<DocumentField[] | undefined> => {
  const basePath = resolve('./content/');

  try {
    const root = await getFileNames(basePath);
    const rootFiles = root.filter(file => Boolean(extname(file)));
    // const files = root.filter(file => !Boolean(extname(file)));
    const dos = await foo(basePath, rootFiles);
    console.log('dossssss', dos);
    const contents = await createDocField(basePath, rootFiles);
    return contents;
  } catch (err) {
    Promise.reject(new Error(`🚨 ERROR collecting content${err}`));
  }
};

exports.collect = collect;
