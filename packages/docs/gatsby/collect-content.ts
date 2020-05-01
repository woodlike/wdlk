// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import { createCompiler } from '@mdx-js/mdx';
import { readdir, readFile } from 'fs';
import { extname, resolve } from 'path';
import detectFrontmatter from 'remark-frontmatter';
import vfile from 'vfile';
import { DocumentField } from './document-field';
import { getDisplay, getFrontmatter } from './mdx-ast';

const readContent = async (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err: unknown, data: string) => {
      if (err) {
        reject(new Error(`🚨 ERROR reading file content ${err}`));
      }
      resolve(data);
    });
  });

const readDirs = async (path: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    readdir(path, (err: unknown, files: string[]) => {
      if (err) {
        reject(new Error(`🚨 ERROR reading directory  ${err}`));
      }
      resolve(files);
    });
  });

const collect = async (): Promise<DocumentField[] | undefined> => {
  const basePath = resolve('./content/');
  const mdxCompiler = createCompiler({ remarkPlugins: [detectFrontmatter] });
  try {
    const files = await readDirs(basePath);
    const contents = Promise.all(
      files.map(async file => {
        if (!Boolean(extname(file))) {
          const files = await readDirs(resolve(basePath, file));
          Promise.all(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            files.reduce(async (acc: any, curr: string) => {
              const data = await readContent(resolve(basePath, curr));
              const mdxAst = mdxCompiler.parse(vfile(data));
              const { name } = getFrontmatter(mdxAst);
              const docIdx = acc.find(doc => doc.name === name);
              if (docIdx) {
                const { name, content } = acc.splice(docIdx, 1)[0];
                return [
                  ...acc,
                  {
                    name,
                    content: [...content, { body: data, display: getDisplay(mdxAst) }],
                  },
                ];
              }
              return [...acc];
            }, []),
          );
          return {
            name: 'not defined',
            content: [{ body: '', display: '' }],
          };
        }
        const data = await readContent(resolve(basePath, file));
        const mdxAst = mdxCompiler.parse(vfile(data));
        const { name } = getFrontmatter(mdxAst);
        return {
          name,
          content: [{ body: data, display: getDisplay(mdxAst) }],
        };
      }),
    );

    return contents;
  } catch (err) {
    Promise.reject(new Error(`🚨 ERROR collecting content${err}`));
  }
};

exports.collect = collect;
