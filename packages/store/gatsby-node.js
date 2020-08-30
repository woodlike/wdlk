require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'ES5',
    typeRoots: ['./node_modules/@types', './typings'],
  },
});

const {
  createCustomSchema,
  createStoreResolvers,
  createPages,
} = require('./src/gatsby');

exports.sourceNodes = ({ actions }) => createCustomSchema(actions);

exports.createResolvers = ({ createResolvers, reporter }) =>
  createStoreResolvers(createResolvers, reporter);

exports.createPages = async ({ actions, graphql, reporter }) =>
  await createPages({ actions, graphql, reporter });
