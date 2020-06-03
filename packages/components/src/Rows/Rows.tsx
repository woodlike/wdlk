/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';
import { useThemeQuery } from '../theme/query';

export interface RowsProps {
  as: HTMLRowsType;
  collapseBelow?: number;
  className?: string;
}
export type HTMLRowsType =
  | 'div'
  | 'section'
  | 'main'
  | 'article'
  | 'nav'
  | 'footer'
  | 'header';

const stylesRows: SxStyleProp = {
  display: 'flex',
  flexDirection: 'row',
};

const createStylesCollapse = (
  qt: ThemeQuery,
  collapseBelow: number,
): SxStyleProp => {
  const bp = qt('breakpoints')(collapseBelow);
  console.log(bp, 'bp', '----------------');
  return {
    flexDirection: 'column',
    [`@media screen and (min-width: ${bp})`]: {
      flexDirection: 'row',
    },
  };
};

const createStylesRows = (
  qt: ThemeQuery,
  collapseBelow: number | undefined,
): SxStyleProp => ({
  ...stylesRows,
  ...(collapseBelow ? createStylesCollapse(qt, collapseBelow) : null),
});

export const Rows: React.FC<RowsProps> = props => {
  const { collapseBelow } = props;
  const { qt } = useThemeQuery();

  return (
    <props.as
      sx={createStylesRows(qt, collapseBelow)}
      className={props.className}>
      {props.children}
    </props.as>
  );
};

Rows.displayName = 'Rows';
