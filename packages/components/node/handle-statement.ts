import { MemberExpression, CallExpression, ArgumentPlaceholder } from '@babel/types';

// enum Statements {
//   AssignmentExpression = 'AssignmentExpression',
//   MemberExpression = 'MemberExpression',
// }

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
