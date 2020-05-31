import { NodeInput } from 'gatsby';
import { extname, resolve } from 'path';
import { v3 as uuidv3 } from 'uuid';
import vfile from 'vfile';
import detectFrontmatter from 'remark-frontmatter';

import { getDisplay, getFrontmatter, readDir, read } from '.';

// Using require to avoid error TS7016:
// Could not find a declaration file for module
const babel = require('@babel/core');
const { createCompiler } = require('@mdx-js/mdx');
const mdx = require('@mdx-js/mdx');
const BabelPluginPluckImports = require('babel-plugin-pluck-imports');

export type Doc = Docs & NodeInput & { slug: string };

export interface Docs {
  readonly id: string;
  readonly body: string;
  readonly display: string;
  readonly frontmatter: Frontmatter;
}

export interface Frontmatter {
  readonly menu: string;
  readonly name: string;
  readonly title?: string;
}

export const babelOptions = {
  configFile: false,
  plugins: [
    new BabelPluginPluckImports().plugin,
    require('@babel/plugin-proposal-object-rest-spread'),
    require('gatsby-plugin-mdx/utils/babel-plugin-html-attr-to-jsx-attr'),
    require('babel-plugin-remove-export-keywords'),
  ],
  presets: [
    require('@babel/preset-react'),
    [
      require('@babel/preset-env'),
      {
        useBuiltIns: `entry`,
        corejs: 2,
        modules: false,
      },
    ],
  ],
};
const mdxCompiler = createCompiler({
  remarkPlugins: [detectFrontmatter],
});

async function* collectContent(): AsyncGenerator<string, void, undefined> {
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

export async function createDocs(): Promise<Map<string, Docs[]>> {
  const docs = new Map<string, Docs[]>();
  const collectedData = await collectContent();

  for await (const data of collectedData) {
    const mdxAst = mdxCompiler.parse(vfile(data));
    const { menu, name, title } = getFrontmatter(mdxAst);
    const jsx = await mdx(data);
    const { code } = babel.transform(jsx, babelOptions);

    const content = {
      id: uuidv3(data, '56079aea-8fc9-11ea-bc55-0242ac130003'),
      body: code
        // TODO: solve string replace more elegantly and
        // create a PR at Gatsby. This line was copied
        // from gatsby-plugin-mdx
        .replace(
          /export\s*default\s*function\s*MDXContent\s*/,
          `return function MDXContent`,
        )
        .replace(
          /export\s*{\s*MDXContent\s+as\s+default\s*};?/,
          `return MDXContent;`,
        ),
      display: getDisplay(mdxAst),
      frontmatter: { menu, name, title },
    };

    docs.has(name) && Array.isArray(docs.get(name))
      ? docs.set(name, [...(docs.get(name) as Docs[]), content])
      : docs.set(name, [content]);
  }
  return docs;
}
