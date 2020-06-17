/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Small } from '@wdlk/components';
import { graphql, useStaticQuery } from 'gatsby';

export interface CopyRightProps {
  readonly color?: 'default' | 'inverted';
  readonly className?: string;
}

const createStylesCopyRight = (color = 'default'): SxStyleProp => ({
  color: color === 'default' ? 'primary' : 'background',
});

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
      <Small
        sx={createStylesCopyRight(props.color)}
        scale={1}
        family="heading.display">
        © {site.siteMetadata.brand} {date.getFullYear()}
      </Small>
    </aside>
  );
};
