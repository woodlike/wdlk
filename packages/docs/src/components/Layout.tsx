import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link, NodeInput } from 'gatsby';

import { MDXFrontmatter } from '../../gatsby/on-create-node';
import { Doc } from '../../gatsby/docs';
import { DocSlot, LayoutSlot, SideBar } from '.';
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
      <LayoutSlot
        document={
          <>
            {docs.map(doc => (
              <DocSlot key={doc.id} content={<MDXRenderer>{mdx.body}</MDXRenderer>}>
                {Boolean(doc.display) && <Code code={doc.display || ''} lang={Language.tsx} size="m" />}
              </DocSlot>
            ))}
          </>
        }
        sidebar={<SideBar>Hi MOm</SideBar>}
      />
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        docs {
          id
          body
          display
        }
      }
    }
  }
`;
