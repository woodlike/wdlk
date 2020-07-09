/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

export interface StageLayoutProps {
  readonly image: JSX.Element;
  readonly content: JSX.Element;
}

const stylesStage: SxStyleProp = {
  display: ['block', 'block', 'block', 'flex'],
  paddingRight: [0, 0, 0, 4, 5],
  paddingLeft: [0, 0, 0, 4, 5],
  overflow: 'hidden',
};

const stylesSlot: SxStyleProp = {
  boxSizing: 'border-box',
  width: ['100%', '100%', '100%', '50%'],
  minHeight: ['auto', 'auto', 'auto', '100vh'],
};

const stylesImageFrame: SxStyleProp = {
  ...stylesSlot,
  position: ['relative', 'relative', 'relative', 'sticky'],
  top: 0,
  height: ['auto', 'auto', 'auto', '100vh'],
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
