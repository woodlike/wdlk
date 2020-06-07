/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Small } from '@wdlk/components';
import { graphql, useStaticQuery } from 'gatsby';

const stylesCopyRight: SxStyleProp = {
  textAlign: 'center',
};

export const CopyRight: React.FC = () => {
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
    <aside sx={stylesCopyRight}>
      <Small scale={1} family="heading.display">
        © {site.siteMetadata.brand} {date.getFullYear()}
      </Small>
    </aside>
  );
};

CopyRight.displayName = 'CopyRight';
