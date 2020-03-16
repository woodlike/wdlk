export const typeScriptBodyAST = [
  {
    type: 'ExpressionStatement',
    expression: {
      type: 'AssignmentExpression',
      operator: '=',
      left: {
        type: 'MemberExpression',
        object: {
          type: 'MemberExpression',
          object: {
            type: 'Identifier',
            name: 'Prism',
          },
          property: {
            type: 'Identifier',
            name: 'languages',
          },
          computed: false,
        },
        property: {
          type: 'Identifier',
          name: 'typescript',
        },
        computed: false,
      },
      right: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          object: {
            type: 'MemberExpression',
            object: {
              type: 'Identifier',
              name: 'Prism',
            },
            property: {
              type: 'Identifier',
              name: 'languages',
            },
            computed: false,
          },
          property: {
            type: 'Identifier',
            name: 'extend',
          },
          computed: false,
        },
        arguments: [
          {
            type: 'StringLiteral',
            extra: {
              rawValue: 'javascript',
              raw: "'javascript'",
            },
            value: 'javascript',
          },
          {
            type: 'ObjectExpression',
            properties: [
              {
                type: 'ObjectProperty',
                method: false,
                key: {
                  type: 'StringLiteral',
                  extra: {
                    rawValue: 'keyword',
                    raw: "'keyword'",
                  },
                  value: 'keyword',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'RegExpLiteral',
                  extra: {
                    raw:
                      '/\\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\\b/',
                  },
                  pattern:
                    '\\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\\b',
                  flags: '',
                },
                leadingComments: [
                  {
                    type: 'CommentLine',
                    value:
                      ' From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words',
                  },
                ],
              },
              {
                type: 'ObjectProperty',
                method: false,
                key: {
                  type: 'StringLiteral',
                  extra: {
                    rawValue: 'builtin',
                    raw: "'builtin'",
                  },
                  value: 'builtin',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'RegExpLiteral',
                  extra: {
                    raw: '/\\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\\b/',
                  },
                  pattern: '\\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\\b',
                  flags: '',
                },
              },
            ],
          },
        ],
      },
    },
  },
  {
    type: 'ExpressionStatement',
    start: 744,
    end: 791,
    expression: {
      type: 'AssignmentExpression',
      operator: '=',
      left: {
        type: 'MemberExpression',
        object: {
          type: 'MemberExpression',
          object: {
            type: 'Identifier',
            name: 'Prism',
          },
          property: {
            type: 'Identifier',
            name: 'languages',
          },
          computed: false,
        },
        property: {
          type: 'Identifier',
          name: 'ts',
        },
        computed: false,
      },
      right: {
        type: 'MemberExpression',
        object: {
          type: 'MemberExpression',
          object: {
            type: 'Identifier',
            name: 'Prism',
          },
          property: {
            type: 'Identifier',
            name: 'languages',
          },
          computed: false,
        },
        property: {
          type: 'Identifier',
          name: 'typescript',
        },
        computed: false,
      },
    },
  },
];
