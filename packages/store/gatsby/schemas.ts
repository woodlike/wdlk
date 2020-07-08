import { Actions } from 'gatsby';

export function createCustomStoreTypes(actions: Actions): void {
  const { createTypes } = actions;

  const typeDef = `
    type SrcSet @dontInfer {
      src: String!
      id: String
    }
`;
  createTypes(typeDef);
}
