import { useStaticQuery, graphql } from 'gatsby';

export interface UseMenuProps {
  category: string;
  pagesSlug: string[];
}

export function useMenu(): UseMenuProps {
  const { allMdx } = useStaticQuery(
    graphql`
      query MenuData {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                menu
              }
            }
          }
        }
      }
    `,
  );
}
