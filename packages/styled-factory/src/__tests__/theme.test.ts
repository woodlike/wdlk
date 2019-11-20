import { theme } from '../theme';

describe('Theme Object', () => {
  it('should math one to one with the exported theme', () => {
    expect(theme).toMatchSnapshot();
  });
});
