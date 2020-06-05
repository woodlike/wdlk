/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';
import { useThemeQuery } from '../theme/query';

export interface RowsProps {
  as?: HTMLRowsType;
  collapseBelow?: number;
  className?: string;
  justifyContent?: CSSJustify;
}

export type HTMLRowsType =
  | 'div'
  | 'section'
  | 'main'
  | 'article'
  | 'nav'
  | 'footer'
  | 'header';

export type CSSJustify =
  | 'center'
  | 'end'
  | 'start'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

const stylesRows: SxStyleProp = {
  display: 'flex',
  flexDirection: 'row',
};

const createStylesCollapse = (
  qt: ThemeQuery,
  collapseBelow: number,
): SxStyleProp => {
  const bp = qt('breakpoints')(collapseBelow);
  return {
    flexDirection: 'column',
    [`@media screen and (min-width: ${bp})`]: {
      flexDirection: 'row',
    },
  };
};

const createStylesRows = (qt: ThemeQuery, props: RowsProps): SxStyleProp => ({
  ...stylesRows,
  ...(props.collapseBelow
    ? createStylesCollapse(qt, props.collapseBelow)
    : null),
  ...(props.justifyContent ? { justifyContent: props.justifyContent } : null),
});

export const Rows: React.FC<RowsProps> = props => {
  const { qt } = useThemeQuery();
  const Component = props.as || 'div';

  return (
    <Component sx={createStylesRows(qt, props)} className={props.className}>
      {props.children}
    </Component>
  );
};

Rows.displayName = 'Rows';
