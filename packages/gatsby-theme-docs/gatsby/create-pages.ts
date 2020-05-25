import { resolve } from 'path';
import { Actions, Reporter, Node } from 'gatsby';

export interface CreatePagesArgs {
  actions: Actions;
  graphql: (query: string) => Promise<MDXQuery>;
  reporter: Reporter;
}

interface MDXQuery {
  data: {
    allMdx: {
      edges: MDXNode[];
    };
  };
  errors: boolean;
}

interface MDXNode {
  node: Node & { fields: { slug: string } };
}

const create = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs): Promise<void> => {
  const { createPage } = actions;

  const result: MDXQuery = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: resolve('./src/components/Layout.tsx'),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    });
  });
};

exports.create = create;
