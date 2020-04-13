/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

export interface RowProps {
  as: HTMLRowType;
  basis?: RowFlexBasis;
  className?: string;
}
export type RowFlexBasis = 'fluid' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5';

export type HTMLRowType = 'div' | 'section' | 'aside' | 'article';

const calculateFlexBasis = (basis: RowFlexBasis): string =>
  basis.split('/').reduce((prev: string, curr: string) => ((+prev * 100) / +curr).toString());

const createStylesRow = (basis: RowFlexBasis | undefined): SxStyleProp => ({
  ...(basis && basis !== 'fluid' && { flex: `0 0 ${calculateFlexBasis(basis)}%` }),
  boxSizing: 'border-box',
});

export const Row: React.FC<RowProps> = props => (
  <props.as sx={createStylesRow(props.basis)} className={props.className}>
    {props.children}
  </props.as>
);

Row.displayName = 'Row';
