/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Controls } from '.';
import { Heading } from '../heading';
import { Text } from '../text';
import { qt } from '../../query';
import { useBreakpoint } from '../../hooks';

export interface VideoStageProps {
  headline: string;
  tag: string;
  copy: string;
  muted: boolean;
}

const stylesStageWrapper: SxStyleProp = {
  position: 'relative',
  margin: 0,
};

const stylesCaption: SxStyleProp = {
  position: 'absolute',
  right: ['50%', 'unset'],
  bottom: [0, `${qt('spaces')(8)}px`],
  left: ['uset', `${qt('spaces')(7)}px`],
  zIndex: 1,
  transform: ['translate(50%, -10%)', 'none'],
  color: `${qt('whites')(0)}`,
};

export const Stage: React.FC<VideoStageProps> = (props): JSX.Element => {
  const isMediumDevice = useBreakpoint(qt('breakpoints')(2));
  return (
    <figure sx={stylesStageWrapper}>
      {props.children}
      <figcaption sx={stylesCaption}>
        <Controls muted={props.muted} onClick={(): void => console.log('hiiii')} />
        <Heading tag="h2" size={isMediumDevice ? 'xl' : 'l'} family="campaign" inverted>
          {props.headline}
        </Heading>
        <Text tag="p" size={isMediumDevice ? 'l' : 'm'} inverted>
          {props.copy}
        </Text>
      </figcaption>
    </figure>
  );
};

Stage.displayName = 'VideoStage';
