import { Actions } from 'gatsby';
import { createDocs } from './docs';
import { v3 as uuidv3 } from 'uuid';
import crypto from 'crypto';

export interface SourceNodesProps {
  actions: Actions;
}

export const sourceNodes = async ({
  actions,
}: SourceNodesProps): Promise<void> => {
  const { createNode } = actions;
  const docs = await createDocs();

  for await (const name of docs.keys()) {
    createNode({
      name,
      id: uuidv3(name, '670a67d2-a059-11ea-bb37-0242ac130002'),
      children: [],
      docs: docs.get(name),
      internal: {
        type: 'Doc',
        contentDigest: crypto.createHash('sha256').update(name).digest('hex'),
      },
    });
    console.log(name, createNode);
  }
};
