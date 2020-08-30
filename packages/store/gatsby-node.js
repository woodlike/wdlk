require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'ES5',
    typeRoots: ['./node_modules/@types', './typings'],
  },
});

const {
  createPages,
  createSlugs,
  createCustomSchema,
  createStoreResolvers,
} = require('./src/gatsby');

exports.sourceNodes = ({ actions }) => createCustomSchema(actions);
exports.onCreateNode = args => createSlugs(args);
exports.createResolvers = ({ createResolvers, reporter }) =>
  createStoreResolvers(createResolvers, reporter);
exports.createPages = async args => await createPages(args);
