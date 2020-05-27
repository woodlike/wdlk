import { Actions, NodePluginSchema } from 'gatsby';

export interface CreateSchemaProps {
  actions: Actions;
  schema: NodePluginSchema;
}

export const createSchema = ({ actions }: CreateSchemaProps): void => {
  const { createTypes } = actions;
  const typeDefs = [
    `type Doc implements Node @dontInfer {
      id: ID!
      name: String!
      docs: [DocsContent!]!
    }

    type DocsContent {
      key: String!
      value: [Doc!]!
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
