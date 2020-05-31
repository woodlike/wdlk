import yaml from 'yaml';

import { Frontmatter } from '.';

export interface MDXAst {
  type: string;
  children: MDXAstNode[];
}

export interface MDXAstNode {
  type: string;
  position: MDXAstNodePosition;
  value?: string;
  depth?: number;
  children?: MDXAstNode[];
}

export interface MDXAstNodePosition {
  start: Position;
  end: Position;
  indent: number[] | [];
}

export interface Position {
  line: number;
  column: number;
  offset: number;
}

export const getDisplay = (mdxAst: MDXAst): string => {
  const node = mdxAst.children.find(
    ({ type, value }) =>
      typeof value === 'string' &&
      value.includes('_display') &&
      type === 'export',
  );
  return node && node.value ? node.value : '';
};

export const getFrontmatter = (mdxAst: MDXAst): Frontmatter => {
  const node = mdxAst.children.find(node => node.type === 'yaml' && node.value);
  return node && node.value
    ? yaml.parse(node.value)
    : { menu: '', name: '', title: '' };
};

export const findNodeByType = (mdxAst: MDXAst, type: string): MDXAstNode | {} =>
  mdxAst.children.find(node => node.type === type && node.value) || {};
