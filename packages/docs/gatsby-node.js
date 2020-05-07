/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});
const source = require('./gatsby/source-nodes');
const onCreateNode = require('./gatsby/on-create-node');

exports.sourceNodes = async ({ actions }) => await source.nodes(actions.createNode);
exports.onCreateNode = args => onCreateNode.addField(args);
