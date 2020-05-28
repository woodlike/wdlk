import { Actions } from 'gatsby';

export interface CreateSchemaProps {
  actions: Actions;
}

export const createSchema = ({ actions }: CreateSchemaProps): void => {
  const { createTypes } = actions;
  const typeDefs = [
    `type Doc implements Node @dontInfer {
      id: ID!
      name: String!
      docs: [Docs!]!
    }
    type Docs {
      id: ID!
      body: String!
      display: String
    }
    `,
  ];
  createTypes(typeDefs);
};
