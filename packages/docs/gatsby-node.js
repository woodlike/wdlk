/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});
const onCreateNode = require('./gatsby/on-create-node');
const pages = require('./gatsby/create-pages');

exports.onCreateNode = async args => await onCreateNode.addField(args);
exports.createPages = async args => await pages.create(args);
