import { Actions, Reporter } from 'gatsby';
import { Doc } from '.';
import { slugify } from './utils';

export interface CreateSchemaProps {
  actions: Actions;
}

export interface CreateSlugProps {
  createResolvers: ({}) => void;
  reporter: Reporter;
}

export const createSchema = ({ actions }: CreateSchemaProps): void => {
  const { createTypes } = actions;
  const typeDefs = [
    `type Doc implements Node @dontInfer {
      id: ID!
      name: String!
      frontmatter: Frontmatter!
      docs: [Docs!]!
      slug: String!
    }
    type Docs {
      id: ID!
      body: String!
      display: String
    }
    type Frontmatter {
      name: String!
      menu: String!
      title: String
    }
    `,
  ];
  createTypes(typeDefs);
};

export const createSlug = ({
  createResolvers,
  reporter,
}: CreateSlugProps): void =>
  createResolvers({
    Doc: {
      slug: {
        resolve: async ({ frontmatter }: Doc): Promise<string> =>
          slugify(frontmatter, reporter),
      },
    },
  });
