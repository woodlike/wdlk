/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Controls } from '.';
import { Heading } from '../heading';
import { qt } from '../../query';

export interface VideoStageProps {
  headline: string;
  tag: string;
  copy: string;
}

const stylesStageWrapper: SxStyleProp = {
  position: 'relative',
  margin: 0,
};

const stylesCaption: SxStyleProp = {
  position: 'absolute',
  right: ['50%', 'unset'],
  bottom: [0, `${qt('spaces')(7)}px`],
  left: ['uset', `${qt('spaces')(6)}px`],
  zIndex: 1,
  transform: ['translate(50%, -10%)', 'none'],
  color: `${qt('whites')(0)}`,
};

export const Stage: React.FC<VideoStageProps> = (props): JSX.Element => {
  return (
    <figure sx={stylesStageWrapper}>
      {props.children}
      <figcaption sx={stylesCaption}>
        <Controls muted={true} onClick={(): void => console.log('hiiii')} />
        <Heading tag="h2" size="xl" family="campaign" inverted>
          {props.headline}
        </Heading>
        <p>{props.copy}</p>
      </figcaption>
    </figure>
  );
};

Stage.displayName = 'VideoStage';
