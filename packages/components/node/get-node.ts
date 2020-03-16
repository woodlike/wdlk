import {
  MemberExpression,
  CallExpression,
  ArgumentPlaceholder,
  ObjectExpression,
  ObjectMethod,
  ObjectProperty,
  SpreadElement,
} from '@babel/types';

// enum Statements {
//   AssignmentExpression = 'AssignmentExpression',
//   MemberExpression = 'MemberExpression',
// }
interface Statement {
  expression: Expression;
}
interface Expression {
  left: MemberExpression;
  right: ObjectExpression;
}

type CLikeNode = [string, (ObjectMethod | ObjectProperty | SpreadElement)[]];

type GetExpressionType = [string, CallExpression, ArgumentPlaceholder[]] | [string, MemberExpression] | [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleStatement(node: any): GetExpressionType {
  if (node && node.expression) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { expression } = node as any;
    const { left, right } = expression;
    const name = left.property.name;
    return right.callee ? [name, right.callee, right.arguments] : [name, { ...right.object, ...right.property }];
  }
  return [];
}
exports.handleStatement = handleStatement;

function clikeNode(node: Statement): CLikeNode {
  const name = node.expression.left.property.name;
  const props = node.expression.right.properties;
  return [name, props];
}

exports.clikeNode = clikeNode;

function javaScript(node: Statement): JavaScriptNode {
  const name = node.expression.left.property.name;
}
