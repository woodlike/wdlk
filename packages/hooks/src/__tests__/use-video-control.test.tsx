import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useVideoControl } from '..';

const TestVideo: React.FC = () => {
  const { videoRef, play, pause } = useVideoControl();
  return (
    <>
      <video data-testid="video-element" ref={videoRef}>
        <source src="foo.webm" type="video/webm" />
      </video>
      <button data-testid="video-play" onClick={play}></button>
      <button data-testid="video-pause" onClick={pause}></button>
    </>
  );
};

describe('use-video-control', () => {
  it('(shorthand): handles a Theme-UI shorthand padding area', () => {
    const { getByTestId, unmount } = render(<TestVideo />);
    const video = getByTestId('video-element') as HTMLVideoElement;
    const playButton = getByTestId('video-play');
    expect(video.currentTime).toBe(0);
    fireEvent(playButton, new MouseEvent('click', {}));
    unmount();
  });
  it('should return true for a muted video as default', () => {
    const { result } = renderHook(() => useVideoControl());
    expect(result.current.mute).toBeTruthy();
  });

  it('should return false for a muted video', () => {
    const { result } = renderHook(() => useVideoControl(false));
    expect(result.current.mute).toBeFalsy();
  });

  it('should set the mute state to false and return it', () => {
    const { result } = renderHook(() => useVideoControl(false));

    act(() => {
      result.current.setMute(false);
    });

    expect(result.current.mute).toBeFalsy();
  });

  it('should set the mute state to true and return it', () => {
    const { result } = renderHook(() => useVideoControl(false));

    act(() => {
      result.current.setMute(false);
      result.current.setMute(true);
    });

    expect(result.current.mute).toBeTruthy();
  });
});
