import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import * as Video from '..';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<MiniCart />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <Video.VideoMedia
        preload="auto"
        top={50}
        controls={true}
        autoPlay={true}
        loop={true}
        isFocused={false}
        sources={[
          {
            id: 'first-demo-video',
            src: '/public/demo-video.mp4',
            type: 'video/mp4',
          },
        ]}
      />
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should contain all interface properties in DOM', () => {
    const { getByTestId, unmount } = render(
      <Video.VideoMedia
        top={0}
        preload="auto"
        controls={true}
        autoPlay={true}
        loop={true}
        isFocused={false}
        sources={[
          {
            id: 'first-demo-video',
            src: '/public/demo-video.mp4',
            type: 'video/mp4',
          },
        ]}
      />
    );
    const video = getByTestId('video-media-test-id');
    expect(video.hasAttribute('controls')).toBeTruthy();
    expect(video.hasAttribute('autoplay')).toBeTruthy();
    expect(video.hasAttribute('loop')).toBeTruthy();
    expect(video.getAttribute('preload')).toBe('auto');
    unmount();
  });

  it('should render a video according to the provided aspect ratio', () => {
    const { getByTestId, unmount } = render(
      <Video.VideoMedia
        top={0}
        preload="auto"
        controls={true}
        autoPlay={true}
        loop={true}
        isFocused={false}
        sources={[
          {
            id: 'first-demo-video',
            src: '/public/demo-video.mp4',
            type: 'video/mp4',
          },
        ]}
      />
    );
    const video = getByTestId('video-media-test-id');
    expect(video).toHaveStyleRule('width', '100%');
    expect(video).toHaveStyleRule('height', 'auto');
    expect(video).toHaveStyleRule('object-fit', 'cover');
    unmount();
  });

  it('should render a video with full widht and a substracted full height', () => {
    const { getByTestId, unmount } = render(
      <Video.VideoMedia
        top={50}
        preload="auto"
        controls={true}
        autoPlay={true}
        loop={true}
        isFocused={false}
        sources={[
          {
            id: 'first-demo-video',
            src: '/public/demo-video.mp4',
            type: 'video/mp4',
          },
        ]}
      />
    );
    const video = getByTestId('video-media-test-id');
    expect(video).toHaveStyleRule('width', '100%');
    expect(video).toHaveStyleRule('height', 'calc(100vh - 50px)');
    expect(video).toHaveStyleRule('object-fit', 'cover');
    unmount();
  });
});
