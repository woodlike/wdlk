import yaml from 'yaml';

export interface Frontmatter {
  name: string;
  title: string;
  menu: string;
}

export interface ASTNode {
  type: string;
  value: string;
}

export interface PartialMdxAST {
  children: ASTNode[];
}

export const getDisplay = (ast: PartialMdxAST): string => {
  const node = ast.children.find(
    ({ type, value }) =>
      typeof value === 'string' &&
      value.includes('_display') &&
      type === 'export',
  );
  return node ? node.value : '';
};

export const getFrontmatter = (mdxAst: PartialMdxAST): Frontmatter => {
  const node = mdxAst.children.find(node => node.type === 'yaml' && node.value);
  return node ? yaml.parse(node.value) : { menu: '', name: '', title: '' };
};

export const findNodeByType = (
  mdxAst: PartialMdxAST,
  type: string,
): ASTNode | undefined =>
  mdxAst.children.find(node => node.type === type && node.value);
