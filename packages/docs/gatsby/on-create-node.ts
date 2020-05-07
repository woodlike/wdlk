import { createFilePath } from 'gatsby-source-filesystem';
import { Actions, Node } from 'gatsby';
import { createDocMap } from './docs-map';

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

const addField = async (args: AddFieldArgs): Promise<void> => {
  const { actions, node, getNode } = args;
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const docs = await createDocMap();
    const path =
      node.frontmatter && node.frontmatter.menu
        ? `${node.frontmatter.menu.toLowerCase()}/${sanitizeSlugPath(createFilePath({ node, getNode }))}`
        : `${sanitizeSlugPath(createFilePath({ node, getNode }))}`;

    createNodeField({
      node,
      name: 'slug',
      value: `/${path}`,
    });

    createNodeField({
      node,
      name: 'doc',
      value: docs.get(node.frontmatter.name),
    });
  }
};

exports.addField = addField;
