import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link, NodeInput } from 'gatsby';

import { MDXFrontmatter } from '../../gatsby/create-node';
import { Doc } from '../../gatsby/docs';
import { SectionLayout } from '.';
import { Code, Language } from '@wdlk/components';

const shortcodes = { Link };

export interface MDXQuery {
  data: {
    mdx: MDXGatsbyNode;
  };
}

export interface MDXGatsbyNode extends NodeInput {
  frontmatter: MDXFrontmatter;
  body: string;
  fields: MDXGatsbyFields;
}

export interface MDXGatsbyFields {
  docs: Doc[];
}

export default function DocPageTemplate({ data }: MDXQuery): JSX.Element {
  const { mdx } = data;
  const {
    fields: { docs },
  } = mdx;
  return (
    <MDXProvider components={shortcodes}>
      {docs.map(doc => {
        console.log(mdx.body);
        console.log(doc.body);
        return (
          <SectionLayout
            key={doc.id}
            content={<MDXRenderer>{doc.body}</MDXRenderer>}>
            {Boolean(doc.display) && (
              <Code code={doc.display || ''} lang={Language.tsx} size="m" />
            )}
          </SectionLayout>
        );
      })}
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query DocQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        docs {
          id
          display
          body
        }
      }
    }
  }
`;
