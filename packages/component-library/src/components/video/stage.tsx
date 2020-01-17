/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { VideoStageProps } from '.';
import { qt } from '../../query';

const stylesStageWrapper: SxStyleProp = {
  position: 'relative',
  margin: 0,
};

const stylesCaption : SxStyleProp= {
  position: 'absolute',
  right: ['50%', 'unset'],
  bottom: [0, `${qt('spaces')(7)}px`],
  left: ['uset', `${qt('spaces')(6)}px`],
  zIndex: 1,
  transform: ['translate(50%, -10%)', 'none'],
  color: `${qt('whites')(0)}`
}

export const Stage: React.FC<VideoStageProps> = (props): JSX.Element => {
  return (
    <figure sx={stylesStageWrapper}>
      {props.children}
      <figcaption sx={stylesCaption}>
        <h1>{props.headline}</h1>
        <p>{props.copy}</p>
      </figcaption>
    </figure>
  );
};

Stage.displayName = 'VideoStage';
