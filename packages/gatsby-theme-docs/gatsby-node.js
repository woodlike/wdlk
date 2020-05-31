require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'ES5',
    typeRoots: ['./node_modules/@types', './typings'],
  },
});

// const { addField } = require('./gatsby/create-node');
const { createSchema, createSlug, sourceNodes, verifyDir } = require('./gatsby');

exports.onPreBootstrap = args => verifyDir(args);
exports.sourceNodes = args => sourceNodes(args);
exports.createSchemaCustomization = args => createSchema(args);
exports.createResolvers = ({ createResolvers, reporter }) => createSlug({ createResolvers, reporter });
// exports.onCreateNode = async args => await addField(args);
// exports.createPages = async args => await createPages(args);
