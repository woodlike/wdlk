/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});
const onCreateNode = require('./gatsby/on-create-node');

exports.onCreateNode = async args => await onCreateNode.addField(args);
