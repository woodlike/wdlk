/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'emotion-theming';
import { render } from '@testing-library/react';

const themeMock = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    nice: 'papayawhip',
  },
};
describe('Theme UI & Emotion Theming', () => {
  it('should receive the values from theme provider', () => {
    const { getByTestId, unmount } = render(
      <ThemeProvider theme={themeMock}>
        <div data-testid="test-1">
          {`1st color: ${themeMock.colors.text}, 2nd color: ${themeMock.colors.background}, 3d color: ${themeMock.colors.nice}`}
        </div>
      </ThemeProvider>,
    );
    expect(getByTestId('test-1').innerHTML).toMatch('1st color: #000, 2nd color: #fff, 3d color: papayawhip');
    unmount();
  });
  it('should style an element according to the overwritten theme values', () => {
    const { getByTestId, unmount } = render(
      <ThemeProvider theme={themeMock}>
        <div
          data-testid="test-1"
          sx={{
            fontWeight: 'bold',
            fontSize: 4,
            color: 'nice',
            bg: 'background',
          }}>
          {`1st color: ${themeMock.colors.text}, 2nd color: ${themeMock.colors.background}, 3d color: ${themeMock.colors.nice}`}
        </div>
      </ThemeProvider>,
    );
    const div = getByTestId('test-1');
    const styles = getComputedStyle(div);
    expect(styles.getPropertyValue('color')).toMatch('papayawhip');
    expect(styles.getPropertyValue('background-color')).toMatch('rgb(255, 255, 255)');
    unmount();
  });
});
