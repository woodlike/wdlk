export const gatsby = {
  ...jest.requireActual('gatsby'),
  graphql: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
  reporter: {
    panicOnBuild: jest.fn().mockName('panicOnBuild'),
  },
};
