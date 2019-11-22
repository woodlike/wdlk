import { theme } from '../theme';

describe('Theme Object', () => {
  it('should match one to one with the exported theme', () => {
    expect(theme).toMatchSnapshot();
  });
});
