/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';
import { useThemeQuery } from '../query';

export interface RowsProps {
  as: HTMLRowsType;
  collapseBelow?: number;
}
export type HTMLRowsType = 'div' | 'section' | 'main' | 'article';

const stylesRows: SxStyleProp = {
  display: 'flex',
  flexDirection: 'row',
};

const createStylesCollapse = (qt: ThemeQuery, collapseBelow: number): SxStyleProp => {
  const bp = qt('breakpoints')(collapseBelow);
  return {
    flexDirection: 'column',
    [`@media screen and (min-width: ${bp})`]: {
      flexDirection: 'row',
    },
  };
};

const createStylesRows = (qt: ThemeQuery, collapseBelow: number | undefined): SxStyleProp => ({
  ...stylesRows,
  ...(collapseBelow ? createStylesCollapse(qt, collapseBelow) : null),
});

export const Rows: React.FC<RowsProps> = props => {
  const { collapseBelow } = props;
  const { qt } = useThemeQuery();

  return <props.as sx={createStylesRows(qt, collapseBelow)}>{props.children}</props.as>;
};

Rows.displayName = 'Rows';
