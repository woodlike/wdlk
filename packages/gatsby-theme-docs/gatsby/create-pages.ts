import { resolve } from 'path';
import { Actions, Reporter } from 'gatsby';
import { Doc } from '.';

export interface CreatePagesArgs {
  actions: Actions;
  graphql: (query: string) => Promise<DocQuery>;
  reporter: Reporter;
}

interface DocQuery {
  data: {
    allDoc: {
      nodes: Pick<Doc, 'id' | 'slug'>[];
    };
  };
  errors: boolean;
}

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs): Promise<void> => {
  const { createPage } = actions;

  const result: DocQuery = await graphql(`
    query {
      allDoc {
        nodes {
          id
          slug
        }
      }
    }
  `);
  const { errors, data } = result;

  if (errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  data.allDoc.nodes.forEach(doc => {
    const { id, slug } = doc;
    createPage({
      path: slug,
      component: resolve('./src/components/Layout.tsx'),
      context: {
        id: id,
      },
    });
  });
};
