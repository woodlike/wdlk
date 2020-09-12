import React from 'react';
import { Small } from '@wdlk/components';
import { graphql, useStaticQuery } from 'gatsby';

export interface CopyRightProps {
  readonly color?: 'default' | 'inverted';
  readonly className?: string;
}

export const CopyRight: React.FC<CopyRightProps> = props => {
  const { site } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          brand
        }
      }
    }
  `);
  const date = new Date();
  return (
    <aside className={props.className}>
      <Small size="s">
        © {site.siteMetadata.brand} {date.getFullYear()}
      </Small>
    </aside>
  );
};
