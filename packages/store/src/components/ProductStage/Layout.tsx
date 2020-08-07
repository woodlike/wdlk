/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface StageLayoutProps {
  readonly image: JSX.Element;
  readonly content: JSX.Element;
}

const stylesStage: SxStyleProp = {
  display: ['block', 'block', 'block', 'flex'],
};

const createHeightStyles = (header: string[]) =>
  header.map(value => `calc(100vh - ${value})`);

const stylesSlot: SxStyleProp = {
  boxSizing: 'border-box',
  width: ['100%', '100%', '100%', '50%'],
  minHeight: ({ header }: Theme) => createHeightStyles(header),
};

const stylesImageFrame: SxStyleProp = {
  ...stylesSlot,
  position: ['relative', 'relative', 'relative', 'sticky'],
  top: ({ header }: Theme) => header,
  height: ({ header }: Theme) => createHeightStyles(header),
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
