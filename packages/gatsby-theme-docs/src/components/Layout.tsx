import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code, Language } from '@wdlk/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';

import { SectionLayout } from '.';
import { Docs, Doc } from '../../gatsby';

const shortcodes = { Link };

interface DocQuery {
  readonly data: {
    readonly doc: Doc;
  };
}

export default function DocPageTemplate({ data }: DocQuery): JSX.Element {
  // TODO: make code component language configurable
  const { doc } = data;
  return (
    <MDXProvider components={shortcodes}>
      {(doc.docs as Docs[]).map((doc: Docs) => (
        <SectionLayout
          key={doc.id}
          content={<MDXRenderer>{doc.body}</MDXRenderer>}>
          {Boolean(doc.display) && (
            <Code code={doc.display || ''} lang={Language.tsx} size="m" />
          )}
        </SectionLayout>
      ))}
    </MDXProvider>
  );
}

export const query = graphql`
  query PageQuery($id: String) {
    doc(id: { eq: $id }) {
      id
      docs {
        id
        display
        body
      }
    }
  }
`;
