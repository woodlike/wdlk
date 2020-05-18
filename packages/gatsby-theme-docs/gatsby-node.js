/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});
const { verifyDir } = require('./gatsby/pre-bootstrap');
const { addField } = require('./gatsby/create-node');
const { create } = require('./gatsby/create-pages');

exports.onPreBootstrap = args => verifyDir(args);
exports.onCreateNode = async args => await addField(args);
exports.createPages = async args => await create(args);
