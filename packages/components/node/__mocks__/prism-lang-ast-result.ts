export const astResult = {
  type: 'ExportNamedDeclaration',
  start: 0,
  end: 739,
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 5,
      column: 3,
    },
  },
  specifiers: [],
  source: null,
  declaration: {
    type: 'VariableDeclaration',
    start: 7,
    end: 739,
    loc: {
      start: {
        line: 1,
        column: 7,
      },
      end: {
        line: 5,
        column: 3,
      },
    },
    declarations: [
      {
        type: 'VariableDeclarator',
        start: 13,
        end: 738,
        loc: {
          start: {
            line: 1,
            column: 13,
          },
          end: {
            line: 5,
            column: 2,
          },
        },
        id: {
          type: 'Identifier',
          start: 13,
          end: 23,
          loc: {
            start: {
              line: 1,
              column: 13,
            },
            end: {
              line: 1,
              column: 23,
            },
            identifierName: 'typescript',
          },
          name: 'typescript',
        },
        init: {
          type: 'CallExpression',
          start: 26,
          end: 738,
          loc: {
            start: {
              line: 1,
              column: 26,
            },
            end: {
              line: 5,
              column: 2,
            },
          },
          callee: {
            type: 'MemberExpression',
            start: 26,
            end: 48,
            loc: {
              start: {
                line: 1,
                column: 26,
              },
              end: {
                line: 1,
                column: 48,
              },
            },
            object: {
              type: 'MemberExpression',
              start: 26,
              end: 41,
              loc: {
                start: {
                  line: 1,
                  column: 26,
                },
                end: {
                  line: 1,
                  column: 41,
                },
              },
              object: {
                type: 'Identifier',
                start: 26,
                end: 31,
                loc: {
                  start: {
                    line: 1,
                    column: 26,
                  },
                  end: {
                    line: 1,
                    column: 31,
                  },
                  identifierName: 'Prism',
                },
                name: 'Prism',
              },
              property: {
                type: 'Identifier',
                start: 32,
                end: 41,
                loc: {
                  start: {
                    line: 1,
                    column: 32,
                  },
                  end: {
                    line: 1,
                    column: 41,
                  },
                  identifierName: 'languages',
                },
                name: 'languages',
              },
              computed: false,
            },
            property: {
              type: 'Identifier',
              start: 42,
              end: 48,
              loc: {
                start: {
                  line: 1,
                  column: 42,
                },
                end: {
                  line: 1,
                  column: 48,
                },
                identifierName: 'extend',
              },
              name: 'extend',
            },
            computed: false,
          },
          arguments: [
            {
              type: 'StringLiteral',
              start: 49,
              end: 61,
              loc: {
                start: {
                  line: 1,
                  column: 49,
                },
                end: {
                  line: 1,
                  column: 61,
                },
              },
              extra: {
                rawValue: 'javascript',
                raw: "'javascript'",
              },
              value: 'javascript',
            },
            {
              type: 'ObjectExpression',
              start: 63,
              end: 737,
              loc: {
                start: {
                  line: 1,
                  column: 63,
                },
                end: {
                  line: 5,
                  column: 1,
                },
              },
              properties: [
                {
                  type: 'ObjectProperty',
                  start: 218,
                  end: 633,
                  loc: {
                    start: {
                      line: 3,
                      column: 1,
                    },
                    end: {
                      line: 3,
                      column: 416,
                    },
                  },
                  method: false,
                  key: {
                    type: 'StringLiteral',
                    start: 218,
                    end: 227,
                    loc: {
                      start: {
                        line: 3,
                        column: 1,
                      },
                      end: {
                        line: 3,
                        column: 10,
                      },
                    },
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
                    start: 229,
                    end: 633,
                    loc: {
                      start: {
                        line: 3,
                        column: 12,
                      },
                      end: {
                        line: 3,
                        column: 416,
                      },
                    },
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
                      start: 66,
                      end: 216,
                      loc: {
                        start: {
                          line: 2,
                          column: 1,
                        },
                        end: {
                          line: 2,
                          column: 151,
                        },
                      },
                    },
                  ],
                },
                {
                  type: 'ObjectProperty',
                  start: 636,
                  end: 734,
                  loc: {
                    start: {
                      line: 4,
                      column: 1,
                    },
                    end: {
                      line: 4,
                      column: 99,
                    },
                  },
                  method: false,
                  key: {
                    type: 'StringLiteral',
                    start: 636,
                    end: 645,
                    loc: {
                      start: {
                        line: 4,
                        column: 1,
                      },
                      end: {
                        line: 4,
                        column: 10,
                      },
                    },
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
                    start: 647,
                    end: 734,
                    loc: {
                      start: {
                        line: 4,
                        column: 12,
                      },
                      end: {
                        line: 4,
                        column: 99,
                      },
                    },
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
    ],
    kind: 'const',
  },
};
