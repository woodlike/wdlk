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
  createStoreResolvers,
} = require('./src/gatsby');

exports.createPages = async args => await createPages(args);
exports.onCreateNode = args => createSlugs(args);
exports.createResolvers = ({ createResolvers, reporter }) =>
  createStoreResolvers(createResolvers, reporter);
