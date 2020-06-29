/**@jsx jsx */
import { useEffect } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';
import { calcThreshold, useIntersectionObserver } from '@wdlk/hooks';

export interface StageLayoutProps {
  readonly image: JSX.Element;
  readonly content: JSX.Element;
}

const CUSTOM_PROPERTY = '--imageTopPosition';

const stylesStage: SxStyleProp = {
  position: 'relative',
  display: ['block', 'block', 'block', 'flex'],
  paddingTop: ({ header }: Theme) => header,
  paddingRight: [3, 4, 5],
  paddingLeft: [3, 4, 5],
  overflow: 'hidden',
};

const stylesSlot: SxStyleProp = {
  boxSizing: 'border-box',
  width: ['100%', '100%', '100%', '50%'],
};

const stylesImage: SxStyleProp = {
  ...stylesSlot,
  transform: `translate3d(0, calc(var(--imageTopPosition) * 1px), 0)`,
  transition: `transform 200ms ease`,
};

const stylesImageIntersection: SxStyleProp = {
  width: '100%',
  height: '100%',
  backgroundColor: 'magenta',
};

export const Layout: React.FC<StageLayoutProps> = props => {
  const [entry, ref, setRef] = useIntersectionObserver<HTMLDivElement>({
    threshold: [0.01],
  });
  useEffect(() => {
    const { boundingClientRect } = entry;
    if (ref && boundingClientRect) {
      ref.style.setProperty(CUSTOM_PROPERTY, `${-boundingClientRect.top}`);
    }
  }, [entry, ref]);

  return (
    <section sx={stylesStage}>
      <div sx={stylesImage}>
        {props.image}
        <div
          sx={stylesImageIntersection}
          ref={(el: HTMLDivElement) => setRef(el)}></div>
      </div>
      <div sx={stylesSlot}>{props.content}</div>
    </section>
  );
};

Layout.displayName = 'ProductStageLayout';
