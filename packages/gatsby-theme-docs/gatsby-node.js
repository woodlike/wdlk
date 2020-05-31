require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'ES5',
    typeRoots: ['./node_modules/@types', './typings'],
  },
});

const { createPages, createSchema, createSlug, sourceNodes, verifyDir } = require('./gatsby');

exports.onPreBootstrap = args => verifyDir(args);
exports.sourceNodes = args => sourceNodes(args);
exports.createSchemaCustomization = args => createSchema(args);
exports.createResolvers = ({ createResolvers, reporter }) => createSlug({ createResolvers, reporter });
exports.createPages = async args => await createPages(args);
