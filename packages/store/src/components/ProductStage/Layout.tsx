/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface StageLayoutProps {
  readonly image: JSX.Element;
  readonly content: JSX.Element;
}

const stylesStage: SxStyleProp = {
  display: ['block', 'block', 'block', 'flex'],
  paddingRight: [0, 0, 0, 0, 0],
  paddingLeft: [0, 0, 0, 0, 0],
  overflow: 'hidden',
};

const createHeightStyles = (header: string[], breakpoint: number) =>
  header.map((value, idx) =>
    idx <= breakpoint ? 'auto' : `calc(100vh - ${value})`,
  );

const stylesSlot: SxStyleProp = {
  boxSizing: 'border-box',
  width: ['100%', '100%', '100%', '50%'],
  minHeight: ({ header }: Theme) => createHeightStyles(header, 3),
};

const stylesImageFrame: SxStyleProp = {
  ...stylesSlot,
  position: ['relative', 'relative', 'relative', 'sticky'],
  top: 0,
  height: ({ header }: Theme) => createHeightStyles(header, 3),
};

export const Layout: React.FC<StageLayoutProps> = props => {
  return (
    <section sx={stylesStage}>
      <div sx={stylesImageFrame}>{props.image}</div>
      <div sx={stylesSlot}>{props.content}</div>
    </section>
  );
};

Layout.displayName = 'ProductStageLayout';
