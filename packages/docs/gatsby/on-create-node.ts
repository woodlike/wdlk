import { createFilePath } from 'gatsby-source-filesystem';
import { Actions, Node } from 'gatsby';
// import { DocNode } from './source-nodes';

export interface AddFieldArgs {
  actions: Actions;
  node: Node & { frontmatter: MDXFrontmatter };
  getNode: Function;
}

export interface MDXFrontmatter {
  name: string;
  title: string;
  menu: string;
}

const sanitizeSlugPath = (value: string): string => {
  if (typeof value !== 'string') {
    return '';
  }
  const strings = value.split('/');
  const idx = strings.findIndex(str => str === 'content');
  // Comparing idx with 1 because Gatsby interprets Boolean(-1) as truthy
  return strings.splice(idx === 1 ? idx + 1 : 1, 1).join('/');
};

const addField = (args: AddFieldArgs): void => {
  const { actions, node, getNode } = args;
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const path =
      node.frontmatter && node.frontmatter.menu
        ? `${node.frontmatter.menu.toLowerCase()}/${sanitizeSlugPath(createFilePath({ node, getNode }))}`
        : `${sanitizeSlugPath(createFilePath({ node, getNode }))}`;

    createNodeField({
      name: 'slug',
      node,
      value: `/${path}`,
    });
  }
};

exports.addField = addField;
