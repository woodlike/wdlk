import * as React from 'react';
import { render } from '@testing-library/react';
import { Container, VideoRenderProps } from '../container';

describe('<Video.Container />', () => {
  it.skip('should initiate the renderless container with muted video', () => {
    const { unmount } = render(
      <Container render={(data: VideoRenderProps): JSX.Element => <video muted={data.isMuted} />} />,
    );
    const video = document.querySelector('video');
    expect(video.getAttribute('muted')).toBeNull();
    unmount();
  });
});
