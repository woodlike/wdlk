import { useStaticQuery, graphql } from 'gatsby';
import { IconName } from '..';

export interface SocialLink {
  readonly id: string;
  readonly name: IconName;
  readonly url: string;
}

export function useSocialLinks(): SocialLink[] {
  const { allSocialJson } = useStaticQuery(graphql`
    query SocialLinks {
      allSocialJson {
        nodes {
          name
          url
          id
        }
      }
    }
  `);
  return allSocialJson.nodes;
}
