import * as React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';

import { qt } from '../theme/query';
import { withFocusStyle } from './with-focus-style';

interface TestCompProps {
  isFocused: true;
  className?: string;
}

const TestComponent: React.FunctionComponent<TestCompProps> = (props): JSX.Element => {
  return (
    <a className={props.className} data-testid="test-test-id" href="#">
      Hi mom
    </a>
  );
};

expect.extend(matchers);
describe('with-outline', () => {
  it('should pass focus style to the argument component', () => {
    const FocusableTestElement = withFocusStyle<TestCompProps>(TestComponent);
    const { queryByTestId, unmount } = render(<FocusableTestElement isFocused={true} />);
    const element = queryByTestId('test-test-id') as HTMLElement;
    const styles = getComputedStyle(element);
    expect(element).toHaveStyleRule('outline-offset', `${qt('borderWidths')(1)}px`);
    expect(element).toHaveStyleRule('outline-width', `${qt('borderWidths')(1)}px`);
    expect(element).toHaveStyleRule('outline-style', 'solid');
    expect(styles.getPropertyValue('outline-color').trim()).toBe(`${qt('grays')(4)}`);
    unmount();
    unmount();
  });
});
