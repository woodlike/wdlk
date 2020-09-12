/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Controls } from '.';
import { qt } from '../theme/query';
import { Heading } from '../Heading';
import { Text } from '../Text';

export interface VideoStageProps {
  readonly headline: string;
  readonly tag: string;
  readonly copy: string;
  readonly muted: boolean;
  handleClick(): void;
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
  return (
    <figure sx={stylesStageWrapper}>
      {props.children}
      <figcaption sx={stylesCaption}>
        <Controls muted={props.muted} onClick={props.handleClick} />
        <Heading as="h2" size="l" isInverted>
          {props.headline}
        </Heading>
        <Text size="m" isInverted>
          {props.copy}
        </Text>
      </figcaption>
    </figure>
  );
};

Stage.displayName = 'VideoStage';
