require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'ES5',
    typeRoots: ['./node_modules/@types', './typings'],
  },
});
const { verifyDir } = require('./gatsby/pre-bootstrap');
const { addField } = require('./gatsby/create-node');
const { create } = require('./gatsby/create-pages');

exports.onPreBootstrap = args => verifyDir(args);
exports.onCreateNode = async args => await addField(args);
exports.createPages = async args => await create(args);
