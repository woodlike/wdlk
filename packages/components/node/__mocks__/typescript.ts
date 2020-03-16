export const astInitial = {
  type: 'ExpressionStatement',
  start: 0,
  end: 742,
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
  expression: {
    type: 'AssignmentExpression',
    start: 0,
    end: 741,
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 5,
        column: 2,
      },
    },
    operator: '=',
    left: {
      type: 'MemberExpression',
      start: 0,
      end: 26,
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 26,
        },
      },
      object: {
        type: 'MemberExpression',
        start: 0,
        end: 15,
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 15,
          },
        },
        object: {
          type: 'Identifier',
          start: 0,
          end: 5,
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 1,
              column: 5,
            },
            identifierName: 'Prism',
          },
          name: 'Prism',
        },
        property: {
          type: 'Identifier',
          start: 6,
          end: 15,
          loc: {
            start: {
              line: 1,
              column: 6,
            },
            end: {
              line: 1,
              column: 15,
            },
            identifierName: 'languages',
          },
          name: 'languages',
        },
        computed: false,
      },
      property: {
        type: 'Identifier',
        start: 16,
        end: 26,
        loc: {
          start: {
            line: 1,
            column: 16,
          },
          end: {
            line: 1,
            column: 26,
          },
          identifierName: 'typescript',
        },
        name: 'typescript',
      },
      computed: false,
    },
    right: {
      type: 'CallExpression',
      start: 29,
      end: 741,
      loc: {
        start: {
          line: 1,
          column: 29,
        },
        end: {
          line: 5,
          column: 2,
        },
      },
      callee: {
        type: 'MemberExpression',
        start: 29,
        end: 51,
        loc: {
          start: {
            line: 1,
            column: 29,
          },
          end: {
            line: 1,
            column: 51,
          },
        },
        object: {
          type: 'MemberExpression',
          start: 29,
          end: 44,
          loc: {
            start: {
              line: 1,
              column: 29,
            },
            end: {
              line: 1,
              column: 44,
            },
          },
          object: {
            type: 'Identifier',
            start: 29,
            end: 34,
            loc: {
              start: {
                line: 1,
                column: 29,
              },
              end: {
                line: 1,
                column: 34,
              },
              identifierName: 'Prism',
            },
            name: 'Prism',
          },
          property: {
            type: 'Identifier',
            start: 35,
            end: 44,
            loc: {
              start: {
                line: 1,
                column: 35,
              },
              end: {
                line: 1,
                column: 44,
              },
              identifierName: 'languages',
            },
            name: 'languages',
          },
          computed: false,
        },
        property: {
          type: 'Identifier',
          start: 45,
          end: 51,
          loc: {
            start: {
              line: 1,
              column: 45,
            },
            end: {
              line: 1,
              column: 51,
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
          start: 52,
          end: 64,
          loc: {
            start: {
              line: 1,
              column: 52,
            },
            end: {
              line: 1,
              column: 64,
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
          start: 66,
          end: 740,
          loc: {
            start: {
              line: 1,
              column: 66,
            },
            end: {
              line: 5,
              column: 1,
            },
          },
          properties: [
            {
              type: 'ObjectProperty',
              start: 221,
              end: 636,
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
                start: 221,
                end: 230,
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
                start: 232,
                end: 636,
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
                  start: 69,
                  end: 219,
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
              start: 639,
              end: 737,
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
                start: 639,
                end: 648,
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
                start: 650,
                end: 737,
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
};
