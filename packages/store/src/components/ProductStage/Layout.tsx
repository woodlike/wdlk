/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface StageLayoutProps {
  readonly image: JSX.Element;
  readonly content: JSX.Element;
}

const stylesStage: SxStyleProp = {
  display: ['block', 'block', 'block', 'flex'],
  paddingRight: [3, 4, 5],
  paddingLeft: [3, 4, 5],
};

const stylesSlot: SxStyleProp = {
  boxSizing: 'border-box',
  width: ['100%', '100%', '100%', '50%'],
  minHeight: '100vh',
};

const stylesImage: SxStyleProp = {
  ...stylesSlot,
  position: 'sticky',
  top: 0,
  height: '100vh',
};

export const Layout: React.FC<StageLayoutProps> = props => {
  return (
    <section sx={stylesStage}>
      <div sx={stylesImage}>{props.image}</div>
      <div sx={stylesSlot}>{props.content}</div>
    </section>
  );
};

Layout.displayName = 'ProductStageLayout';
