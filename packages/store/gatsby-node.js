require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'ES5',
    typeRoots: ['./node_modules/@types', './typings'],
  },
});

const { createPages, createSlugs: createSlug, createStoreResolvers, createCustomStoreTypes } = require('./gatsby');

exports.sourceNodes = ({ actions }) => createCustomStoreTypes(actions);
exports.createPages = async args => await createPages(args);
exports.onCreateNode = (args) => createSlug(args);
exports.createResolvers = ({ createResolvers }) => createStoreResolvers(createResolvers)
