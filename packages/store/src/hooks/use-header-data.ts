import { useStaticQuery, graphql } from 'gatsby';
import { LinkNode } from '.';

export interface UseHeaderData {
  readonly header: HeaderData;
  readonly url: string;
}

export interface HeaderData {
  readonly miniCart: LinkNode & { items: LinkNode[] };
  readonly cart: LinkNode;
  readonly logo: LinkNode & { desc: string };
}

export function useHeaderData(): UseHeaderData {
  const { allDataJson, site } = useStaticQuery(graphql`
    query HeaderJson {
      allDataJson {
        nodes {
          logo {
            title
            desc
          }
          cart {
            handle
          }
          miniCart {
            items {
              handle
              title
              id
            }
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  return {
    header: allDataJson.nodes[0],
    url: site.siteMetadata.siteUrl,
  };
}
