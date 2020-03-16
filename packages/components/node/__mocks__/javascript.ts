export const javascript = [
  {
    type: 'ExpressionStatement',
    start: 0,
    end: 1278,
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 23,
        column: 3,
      },
    },
    expression: {
      type: 'AssignmentExpression',
      start: 0,
      end: 1277,
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 23,
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
            identifierName: 'javascript',
          },
          name: 'javascript',
        },
        computed: false,
      },
      right: {
        type: 'CallExpression',
        start: 29,
        end: 1277,
        loc: {
          start: {
            line: 1,
            column: 29,
          },
          end: {
            line: 23,
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
            end: 59,
            loc: {
              start: {
                line: 1,
                column: 52,
              },
              end: {
                line: 1,
                column: 59,
              },
            },
            extra: {
              rawValue: 'clike',
              raw: "'clike'",
            },
            value: 'clike',
          },
          {
            type: 'ObjectExpression',
            start: 61,
            end: 1276,
            loc: {
              start: {
                line: 1,
                column: 61,
              },
              end: {
                line: 23,
                column: 1,
              },
            },
            properties: [
              {
                type: 'ObjectProperty',
                start: 64,
                end: 252,
                loc: {
                  start: {
                    line: 2,
                    column: 1,
                  },
                  end: {
                    line: 8,
                    column: 2,
                  },
                },
                method: false,
                key: {
                  type: 'StringLiteral',
                  start: 64,
                  end: 76,
                  loc: {
                    start: {
                      line: 2,
                      column: 1,
                    },
                    end: {
                      line: 2,
                      column: 13,
                    },
                  },
                  extra: {
                    rawValue: 'class-name',
                    raw: "'class-name'",
                  },
                  value: 'class-name',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'ArrayExpression',
                  start: 78,
                  end: 252,
                  loc: {
                    start: {
                      line: 2,
                      column: 15,
                    },
                    end: {
                      line: 8,
                      column: 2,
                    },
                  },
                  elements: [
                    {
                      type: 'MemberExpression',
                      start: 82,
                      end: 117,
                      loc: {
                        start: {
                          line: 3,
                          column: 2,
                        },
                        end: {
                          line: 3,
                          column: 37,
                        },
                      },
                      object: {
                        type: 'MemberExpression',
                        start: 82,
                        end: 103,
                        loc: {
                          start: {
                            line: 3,
                            column: 2,
                          },
                          end: {
                            line: 3,
                            column: 23,
                          },
                        },
                        object: {
                          type: 'MemberExpression',
                          start: 82,
                          end: 97,
                          loc: {
                            start: {
                              line: 3,
                              column: 2,
                            },
                            end: {
                              line: 3,
                              column: 17,
                            },
                          },
                          object: {
                            type: 'Identifier',
                            start: 82,
                            end: 87,
                            loc: {
                              start: {
                                line: 3,
                                column: 2,
                              },
                              end: {
                                line: 3,
                                column: 7,
                              },
                              identifierName: 'Prism',
                            },
                            name: 'Prism',
                          },
                          property: {
                            type: 'Identifier',
                            start: 88,
                            end: 97,
                            loc: {
                              start: {
                                line: 3,
                                column: 8,
                              },
                              end: {
                                line: 3,
                                column: 17,
                              },
                              identifierName: 'languages',
                            },
                            name: 'languages',
                          },
                          computed: false,
                        },
                        property: {
                          type: 'Identifier',
                          start: 98,
                          end: 103,
                          loc: {
                            start: {
                              line: 3,
                              column: 18,
                            },
                            end: {
                              line: 3,
                              column: 23,
                            },
                            identifierName: 'clike',
                          },
                          name: 'clike',
                        },
                        computed: false,
                      },
                      property: {
                        type: 'StringLiteral',
                        start: 104,
                        end: 116,
                        loc: {
                          start: {
                            line: 3,
                            column: 24,
                          },
                          end: {
                            line: 3,
                            column: 36,
                          },
                        },
                        extra: {
                          rawValue: 'class-name',
                          raw: "'class-name'",
                        },
                        value: 'class-name',
                      },
                      computed: true,
                    },
                    {
                      type: 'ObjectExpression',
                      start: 121,
                      end: 249,
                      loc: {
                        start: {
                          line: 4,
                          column: 2,
                        },
                        end: {
                          line: 7,
                          column: 3,
                        },
                      },
                      properties: [
                        {
                          type: 'ObjectProperty',
                          start: 126,
                          end: 224,
                          loc: {
                            start: {
                              line: 5,
                              column: 3,
                            },
                            end: {
                              line: 5,
                              column: 101,
                            },
                          },
                          method: false,
                          key: {
                            type: 'Identifier',
                            start: 126,
                            end: 133,
                            loc: {
                              start: {
                                line: 5,
                                column: 3,
                              },
                              end: {
                                line: 5,
                                column: 10,
                              },
                              identifierName: 'pattern',
                            },
                            name: 'pattern',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'RegExpLiteral',
                            start: 135,
                            end: 224,
                            loc: {
                              start: {
                                line: 5,
                                column: 12,
                              },
                              end: {
                                line: 5,
                                column: 101,
                              },
                            },
                            extra: {
                              raw:
                                '/(^|[^$\\w\\xA0-\\uFFFF])[_$A-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\.(?:prototype|constructor))/',
                            },
                            pattern:
                              '(^|[^$\\w\\xA0-\\uFFFF])[_$A-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\.(?:prototype|constructor))',
                            flags: '',
                          },
                        },
                        {
                          type: 'ObjectProperty',
                          start: 229,
                          end: 245,
                          loc: {
                            start: {
                              line: 6,
                              column: 3,
                            },
                            end: {
                              line: 6,
                              column: 19,
                            },
                          },
                          method: false,
                          key: {
                            type: 'Identifier',
                            start: 229,
                            end: 239,
                            loc: {
                              start: {
                                line: 6,
                                column: 3,
                              },
                              end: {
                                line: 6,
                                column: 13,
                              },
                              identifierName: 'lookbehind',
                            },
                            name: 'lookbehind',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'BooleanLiteral',
                            start: 241,
                            end: 245,
                            loc: {
                              start: {
                                line: 6,
                                column: 15,
                              },
                              end: {
                                line: 6,
                                column: 19,
                              },
                            },
                            value: true,
                          },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                type: 'ObjectProperty',
                start: 255,
                end: 763,
                loc: {
                  start: {
                    line: 9,
                    column: 1,
                  },
                  end: {
                    line: 18,
                    column: 2,
                  },
                },
                method: false,
                key: {
                  type: 'StringLiteral',
                  start: 255,
                  end: 264,
                  loc: {
                    start: {
                      line: 9,
                      column: 1,
                    },
                    end: {
                      line: 9,
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
                  type: 'ArrayExpression',
                  start: 266,
                  end: 763,
                  loc: {
                    start: {
                      line: 9,
                      column: 12,
                    },
                    end: {
                      line: 18,
                      column: 2,
                    },
                  },
                  elements: [
                    {
                      type: 'ObjectExpression',
                      start: 270,
                      end: 342,
                      loc: {
                        start: {
                          line: 10,
                          column: 2,
                        },
                        end: {
                          line: 13,
                          column: 3,
                        },
                      },
                      properties: [
                        {
                          type: 'ObjectProperty',
                          start: 275,
                          end: 317,
                          loc: {
                            start: {
                              line: 11,
                              column: 3,
                            },
                            end: {
                              line: 11,
                              column: 45,
                            },
                          },
                          method: false,
                          key: {
                            type: 'Identifier',
                            start: 275,
                            end: 282,
                            loc: {
                              start: {
                                line: 11,
                                column: 3,
                              },
                              end: {
                                line: 11,
                                column: 10,
                              },
                              identifierName: 'pattern',
                            },
                            name: 'pattern',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'RegExpLiteral',
                            start: 284,
                            end: 317,
                            loc: {
                              start: {
                                line: 11,
                                column: 12,
                              },
                              end: {
                                line: 11,
                                column: 45,
                              },
                            },
                            extra: {
                              raw: '/((?:^|})\\s*)(?:catch|finally)\\b/',
                            },
                            pattern: '((?:^|})\\s*)(?:catch|finally)\\b',
                            flags: '',
                          },
                        },
                        {
                          type: 'ObjectProperty',
                          start: 322,
                          end: 338,
                          loc: {
                            start: {
                              line: 12,
                              column: 3,
                            },
                            end: {
                              line: 12,
                              column: 19,
                            },
                          },
                          method: false,
                          key: {
                            type: 'Identifier',
                            start: 322,
                            end: 332,
                            loc: {
                              start: {
                                line: 12,
                                column: 3,
                              },
                              end: {
                                line: 12,
                                column: 13,
                              },
                              identifierName: 'lookbehind',
                            },
                            name: 'lookbehind',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'BooleanLiteral',
                            start: 334,
                            end: 338,
                            loc: {
                              start: {
                                line: 12,
                                column: 15,
                              },
                              end: {
                                line: 12,
                                column: 19,
                              },
                            },
                            value: true,
                          },
                        },
                      ],
                    },
                    {
                      type: 'ObjectExpression',
                      start: 346,
                      end: 759,
                      loc: {
                        start: {
                          line: 14,
                          column: 2,
                        },
                        end: {
                          line: 17,
                          column: 3,
                        },
                      },
                      properties: [
                        {
                          type: 'ObjectProperty',
                          start: 351,
                          end: 734,
                          loc: {
                            start: {
                              line: 15,
                              column: 3,
                            },
                            end: {
                              line: 15,
                              column: 386,
                            },
                          },
                          method: false,
                          key: {
                            type: 'Identifier',
                            start: 351,
                            end: 358,
                            loc: {
                              start: {
                                line: 15,
                                column: 3,
                              },
                              end: {
                                line: 15,
                                column: 10,
                              },
                              identifierName: 'pattern',
                            },
                            name: 'pattern',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'RegExpLiteral',
                            start: 360,
                            end: 734,
                            loc: {
                              start: {
                                line: 15,
                                column: 12,
                              },
                              end: {
                                line: 15,
                                column: 386,
                              },
                            },
                            extra: {
                              raw:
                                '/(^|[^.]|\\.\\.\\.\\s*)\\b(?:as|async(?=\\s*(?:function\\b|\\(|[$\\w\\xA0-\\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\\b/',
                            },
                            pattern:
                              '(^|[^.]|\\.\\.\\.\\s*)\\b(?:as|async(?=\\s*(?:function\\b|\\(|[$\\w\\xA0-\\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\\b',
                            flags: '',
                          },
                        },
                        {
                          type: 'ObjectProperty',
                          start: 739,
                          end: 755,
                          loc: {
                            start: {
                              line: 16,
                              column: 3,
                            },
                            end: {
                              line: 16,
                              column: 19,
                            },
                          },
                          method: false,
                          key: {
                            type: 'Identifier',
                            start: 739,
                            end: 749,
                            loc: {
                              start: {
                                line: 16,
                                column: 3,
                              },
                              end: {
                                line: 16,
                                column: 13,
                              },
                              identifierName: 'lookbehind',
                            },
                            name: 'lookbehind',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'BooleanLiteral',
                            start: 751,
                            end: 755,
                            loc: {
                              start: {
                                line: 16,
                                column: 15,
                              },
                              end: {
                                line: 16,
                                column: 19,
                              },
                            },
                            value: true,
                          },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                type: 'ObjectProperty',
                start: 766,
                end: 999,
                loc: {
                  start: {
                    line: 19,
                    column: 1,
                  },
                  end: {
                    line: 19,
                    column: 234,
                  },
                },
                method: false,
                key: {
                  type: 'StringLiteral',
                  start: 766,
                  end: 774,
                  loc: {
                    start: {
                      line: 19,
                      column: 1,
                    },
                    end: {
                      line: 19,
                      column: 9,
                    },
                  },
                  extra: {
                    rawValue: 'number',
                    raw: "'number'",
                  },
                  value: 'number',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'RegExpLiteral',
                  start: 776,
                  end: 999,
                  loc: {
                    start: {
                      line: 19,
                      column: 11,
                    },
                    end: {
                      line: 19,
                      column: 234,
                    },
                  },
                  extra: {
                    raw:
                      '/\\b(?:(?:0[xX](?:[\\dA-Fa-f](?:_[\\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\\d(?:_\\d)?)+n|NaN|Infinity)\\b|(?:\\b(?:\\d(?:_\\d)?)+\\.?(?:\\d(?:_\\d)?)*|\\B\\.(?:\\d(?:_\\d)?)+)(?:[Ee][+-]?(?:\\d(?:_\\d)?)+)?/',
                  },
                  pattern:
                    '\\b(?:(?:0[xX](?:[\\dA-Fa-f](?:_[\\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\\d(?:_\\d)?)+n|NaN|Infinity)\\b|(?:\\b(?:\\d(?:_\\d)?)+\\.?(?:\\d(?:_\\d)?)*|\\B\\.(?:\\d(?:_\\d)?)+)(?:[Ee][+-]?(?:\\d(?:_\\d)?)+)?',
                  flags: '',
                },
              },
              {
                type: 'ObjectProperty',
                start: 1082,
                end: 1177,
                loc: {
                  start: {
                    line: 21,
                    column: 1,
                  },
                  end: {
                    line: 21,
                    column: 96,
                  },
                },
                method: false,
                key: {
                  type: 'StringLiteral',
                  start: 1082,
                  end: 1092,
                  loc: {
                    start: {
                      line: 21,
                      column: 1,
                    },
                    end: {
                      line: 21,
                      column: 11,
                    },
                  },
                  extra: {
                    rawValue: 'function',
                    raw: "'function'",
                  },
                  value: 'function',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'RegExpLiteral',
                  start: 1094,
                  end: 1177,
                  loc: {
                    start: {
                      line: 21,
                      column: 13,
                    },
                    end: {
                      line: 21,
                      column: 96,
                    },
                  },
                  extra: {
                    raw:
                      '/#?[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*(?:\\.\\s*(?:apply|bind|call)\\s*)?\\()/',
                  },
                  pattern:
                    '#?[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*(?:\\.\\s*(?:apply|bind|call)\\s*)?\\()',
                  flags: '',
                },
                leadingComments: [
                  {
                    type: 'CommentLine',
                    value: ' Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)',
                    start: 1002,
                    end: 1080,
                    loc: {
                      start: {
                        line: 20,
                        column: 1,
                      },
                      end: {
                        line: 20,
                        column: 79,
                      },
                    },
                  },
                ],
              },
              {
                type: 'ObjectProperty',
                start: 1180,
                end: 1274,
                loc: {
                  start: {
                    line: 22,
                    column: 1,
                  },
                  end: {
                    line: 22,
                    column: 95,
                  },
                },
                method: false,
                key: {
                  type: 'StringLiteral',
                  start: 1180,
                  end: 1190,
                  loc: {
                    start: {
                      line: 22,
                      column: 1,
                    },
                    end: {
                      line: 22,
                      column: 11,
                    },
                  },
                  extra: {
                    rawValue: 'operator',
                    raw: "'operator'",
                  },
                  value: 'operator',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'RegExpLiteral',
                  start: 1192,
                  end: 1274,
                  loc: {
                    start: {
                      line: 22,
                      column: 13,
                    },
                    end: {
                      line: 22,
                      column: 95,
                    },
                  },
                  extra: {
                    raw: '/--|\\+\\+|\\*\\*=?|=>|&&|\\|\\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\\.{3}|\\?[.?]?|[~:]/',
                  },
                  pattern: '--|\\+\\+|\\*\\*=?|=>|&&|\\|\\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\\.{3}|\\?[.?]?|[~:]',
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
    start: 1280,
    end: 1405,
    loc: {
      start: {
        line: 25,
        column: 0,
      },
      end: {
        line: 25,
        column: 125,
      },
    },
    expression: {
      type: 'AssignmentExpression',
      start: 1280,
      end: 1404,
      loc: {
        start: {
          line: 25,
          column: 0,
        },
        end: {
          line: 25,
          column: 124,
        },
      },
      operator: '=',
      left: {
        type: 'MemberExpression',
        start: 1280,
        end: 1331,
        loc: {
          start: {
            line: 25,
            column: 0,
          },
          end: {
            line: 25,
            column: 51,
          },
        },
        object: {
          type: 'MemberExpression',
          start: 1280,
          end: 1323,
          loc: {
            start: {
              line: 25,
              column: 0,
            },
            end: {
              line: 25,
              column: 43,
            },
          },
          object: {
            type: 'MemberExpression',
            start: 1280,
            end: 1320,
            loc: {
              start: {
                line: 25,
                column: 0,
              },
              end: {
                line: 25,
                column: 40,
              },
            },
            object: {
              type: 'MemberExpression',
              start: 1280,
              end: 1306,
              loc: {
                start: {
                  line: 25,
                  column: 0,
                },
                end: {
                  line: 25,
                  column: 26,
                },
              },
              object: {
                type: 'MemberExpression',
                start: 1280,
                end: 1295,
                loc: {
                  start: {
                    line: 25,
                    column: 0,
                  },
                  end: {
                    line: 25,
                    column: 15,
                  },
                },
                object: {
                  type: 'Identifier',
                  start: 1280,
                  end: 1285,
                  loc: {
                    start: {
                      line: 25,
                      column: 0,
                    },
                    end: {
                      line: 25,
                      column: 5,
                    },
                    identifierName: 'Prism',
                  },
                  name: 'Prism',
                },
                property: {
                  type: 'Identifier',
                  start: 1286,
                  end: 1295,
                  loc: {
                    start: {
                      line: 25,
                      column: 6,
                    },
                    end: {
                      line: 25,
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
                start: 1296,
                end: 1306,
                loc: {
                  start: {
                    line: 25,
                    column: 16,
                  },
                  end: {
                    line: 25,
                    column: 26,
                  },
                  identifierName: 'javascript',
                },
                name: 'javascript',
              },
              computed: false,
            },
            property: {
              type: 'StringLiteral',
              start: 1307,
              end: 1319,
              loc: {
                start: {
                  line: 25,
                  column: 27,
                },
                end: {
                  line: 25,
                  column: 39,
                },
              },
              extra: {
                rawValue: 'class-name',
                raw: "'class-name'",
              },
              value: 'class-name',
            },
            computed: true,
          },
          property: {
            type: 'NumericLiteral',
            start: 1321,
            end: 1322,
            loc: {
              start: {
                line: 25,
                column: 41,
              },
              end: {
                line: 25,
                column: 42,
              },
            },
            extra: {
              rawValue: 0,
              raw: '0',
            },
            value: 0,
          },
          computed: true,
        },
        property: {
          type: 'Identifier',
          start: 1324,
          end: 1331,
          loc: {
            start: {
              line: 25,
              column: 44,
            },
            end: {
              line: 25,
              column: 51,
            },
            identifierName: 'pattern',
          },
          name: 'pattern',
        },
        computed: false,
      },
      right: {
        type: 'RegExpLiteral',
        start: 1334,
        end: 1404,
        loc: {
          start: {
            line: 25,
            column: 54,
          },
          end: {
            line: 25,
            column: 124,
          },
        },
        extra: {
          raw: '/(\\b(?:class|interface|extends|implements|instanceof|new)\\s+)[\\w.\\\\]+/',
        },
        pattern: '(\\b(?:class|interface|extends|implements|instanceof|new)\\s+)[\\w.\\\\]+',
        flags: '',
      },
    },
  },
  {
    type: 'ExpressionStatement',
    start: 1407,
    end: 3014,
    loc: {
      start: {
        line: 27,
        column: 0,
      },
      end: {
        line: 60,
        column: 3,
      },
    },
    expression: {
      type: 'CallExpression',
      start: 1407,
      end: 3013,
      loc: {
        start: {
          line: 27,
          column: 0,
        },
        end: {
          line: 60,
          column: 2,
        },
      },
      callee: {
        type: 'MemberExpression',
        start: 1407,
        end: 1435,
        loc: {
          start: {
            line: 27,
            column: 0,
          },
          end: {
            line: 27,
            column: 28,
          },
        },
        object: {
          type: 'MemberExpression',
          start: 1407,
          end: 1422,
          loc: {
            start: {
              line: 27,
              column: 0,
            },
            end: {
              line: 27,
              column: 15,
            },
          },
          object: {
            type: 'Identifier',
            start: 1407,
            end: 1412,
            loc: {
              start: {
                line: 27,
                column: 0,
              },
              end: {
                line: 27,
                column: 5,
              },
              identifierName: 'Prism',
            },
            name: 'Prism',
          },
          property: {
            type: 'Identifier',
            start: 1413,
            end: 1422,
            loc: {
              start: {
                line: 27,
                column: 6,
              },
              end: {
                line: 27,
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
          start: 1423,
          end: 1435,
          loc: {
            start: {
              line: 27,
              column: 16,
            },
            end: {
              line: 27,
              column: 28,
            },
            identifierName: 'insertBefore',
          },
          name: 'insertBefore',
        },
        computed: false,
      },
      arguments: [
        {
          type: 'StringLiteral',
          start: 1436,
          end: 1448,
          loc: {
            start: {
              line: 27,
              column: 29,
            },
            end: {
              line: 27,
              column: 41,
            },
          },
          extra: {
            rawValue: 'javascript',
            raw: "'javascript'",
          },
          value: 'javascript',
        },
        {
          type: 'StringLiteral',
          start: 1450,
          end: 1459,
          loc: {
            start: {
              line: 27,
              column: 43,
            },
            end: {
              line: 27,
              column: 52,
            },
          },
          extra: {
            rawValue: 'keyword',
            raw: "'keyword'",
          },
          value: 'keyword',
        },
        {
          type: 'ObjectExpression',
          start: 1461,
          end: 3012,
          loc: {
            start: {
              line: 27,
              column: 54,
            },
            end: {
              line: 60,
              column: 1,
            },
          },
          properties: [
            {
              type: 'ObjectProperty',
              start: 1464,
              end: 1678,
              loc: {
                start: {
                  line: 28,
                  column: 1,
                },
                end: {
                  line: 32,
                  column: 2,
                },
              },
              method: false,
              key: {
                type: 'StringLiteral',
                start: 1464,
                end: 1471,
                loc: {
                  start: {
                    line: 28,
                    column: 1,
                  },
                  end: {
                    line: 28,
                    column: 8,
                  },
                },
                extra: {
                  rawValue: 'regex',
                  raw: "'regex'",
                },
                value: 'regex',
              },
              computed: false,
              shorthand: false,
              value: {
                type: 'ObjectExpression',
                start: 1473,
                end: 1678,
                loc: {
                  start: {
                    line: 28,
                    column: 10,
                  },
                  end: {
                    line: 32,
                    column: 2,
                  },
                },
                properties: [
                  {
                    type: 'ObjectProperty',
                    start: 1477,
                    end: 1639,
                    loc: {
                      start: {
                        line: 29,
                        column: 2,
                      },
                      end: {
                        line: 29,
                        column: 164,
                      },
                    },
                    method: false,
                    key: {
                      type: 'Identifier',
                      start: 1477,
                      end: 1484,
                      loc: {
                        start: {
                          line: 29,
                          column: 2,
                        },
                        end: {
                          line: 29,
                          column: 9,
                        },
                        identifierName: 'pattern',
                      },
                      name: 'pattern',
                    },
                    computed: false,
                    shorthand: false,
                    value: {
                      type: 'RegExpLiteral',
                      start: 1486,
                      end: 1639,
                      loc: {
                        start: {
                          line: 29,
                          column: 11,
                        },
                        end: {
                          line: 29,
                          column: 164,
                        },
                      },
                      extra: {
                        raw:
                          '/((?:^|[^$\\w\\xA0-\\uFFFF."\'\\])\\s])\\s*)\\/(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[gimyus]{0,6}(?=(?:\\s|\\/\\*[\\s\\S]*?\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))/',
                      },
                      pattern:
                        '((?:^|[^$\\w\\xA0-\\uFFFF."\'\\])\\s])\\s*)\\/(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[gimyus]{0,6}(?=(?:\\s|\\/\\*[\\s\\S]*?\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))',
                      flags: '',
                    },
                  },
                  {
                    type: 'ObjectProperty',
                    start: 1643,
                    end: 1659,
                    loc: {
                      start: {
                        line: 30,
                        column: 2,
                      },
                      end: {
                        line: 30,
                        column: 18,
                      },
                    },
                    method: false,
                    key: {
                      type: 'Identifier',
                      start: 1643,
                      end: 1653,
                      loc: {
                        start: {
                          line: 30,
                          column: 2,
                        },
                        end: {
                          line: 30,
                          column: 12,
                        },
                        identifierName: 'lookbehind',
                      },
                      name: 'lookbehind',
                    },
                    computed: false,
                    shorthand: false,
                    value: {
                      type: 'BooleanLiteral',
                      start: 1655,
                      end: 1659,
                      loc: {
                        start: {
                          line: 30,
                          column: 14,
                        },
                        end: {
                          line: 30,
                          column: 18,
                        },
                      },
                      value: true,
                    },
                  },
                  {
                    type: 'ObjectProperty',
                    start: 1663,
                    end: 1675,
                    loc: {
                      start: {
                        line: 31,
                        column: 2,
                      },
                      end: {
                        line: 31,
                        column: 14,
                      },
                    },
                    method: false,
                    key: {
                      type: 'Identifier',
                      start: 1663,
                      end: 1669,
                      loc: {
                        start: {
                          line: 31,
                          column: 2,
                        },
                        end: {
                          line: 31,
                          column: 8,
                        },
                        identifierName: 'greedy',
                      },
                      name: 'greedy',
                    },
                    computed: false,
                    shorthand: false,
                    value: {
                      type: 'BooleanLiteral',
                      start: 1671,
                      end: 1675,
                      loc: {
                        start: {
                          line: 31,
                          column: 10,
                        },
                        end: {
                          line: 31,
                          column: 14,
                        },
                      },
                      value: true,
                    },
                  },
                ],
              },
            },
            {
              type: 'ObjectProperty',
              start: 1772,
              end: 1989,
              loc: {
                start: {
                  line: 34,
                  column: 1,
                },
                end: {
                  line: 37,
                  column: 2,
                },
              },
              method: false,
              key: {
                type: 'StringLiteral',
                start: 1772,
                end: 1791,
                loc: {
                  start: {
                    line: 34,
                    column: 1,
                  },
                  end: {
                    line: 34,
                    column: 20,
                  },
                },
                extra: {
                  rawValue: 'function-variable',
                  raw: "'function-variable'",
                },
                value: 'function-variable',
              },
              computed: false,
              shorthand: false,
              value: {
                type: 'ObjectExpression',
                start: 1793,
                end: 1989,
                loc: {
                  start: {
                    line: 34,
                    column: 22,
                  },
                  end: {
                    line: 37,
                    column: 2,
                  },
                },
                properties: [
                  {
                    type: 'ObjectProperty',
                    start: 1797,
                    end: 1965,
                    loc: {
                      start: {
                        line: 35,
                        column: 2,
                      },
                      end: {
                        line: 35,
                        column: 170,
                      },
                    },
                    method: false,
                    key: {
                      type: 'Identifier',
                      start: 1797,
                      end: 1804,
                      loc: {
                        start: {
                          line: 35,
                          column: 2,
                        },
                        end: {
                          line: 35,
                          column: 9,
                        },
                        identifierName: 'pattern',
                      },
                      name: 'pattern',
                    },
                    computed: false,
                    shorthand: false,
                    value: {
                      type: 'RegExpLiteral',
                      start: 1806,
                      end: 1965,
                      loc: {
                        start: {
                          line: 35,
                          column: 11,
                        },
                        end: {
                          line: 35,
                          column: 170,
                        },
                      },
                      extra: {
                        raw:
                          '/#?[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*[=:]\\s*(?:async\\s*)?(?:\\bfunction\\b|(?:\\((?:[^()]|\\([^()]*\\))*\\)|[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)\\s*=>))/',
                      },
                      pattern:
                        '#?[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*[=:]\\s*(?:async\\s*)?(?:\\bfunction\\b|(?:\\((?:[^()]|\\([^()]*\\))*\\)|[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)\\s*=>))',
                      flags: '',
                    },
                  },
                  {
                    type: 'ObjectProperty',
                    start: 1969,
                    end: 1986,
                    loc: {
                      start: {
                        line: 36,
                        column: 2,
                      },
                      end: {
                        line: 36,
                        column: 19,
                      },
                    },
                    method: false,
                    key: {
                      type: 'Identifier',
                      start: 1969,
                      end: 1974,
                      loc: {
                        start: {
                          line: 36,
                          column: 2,
                        },
                        end: {
                          line: 36,
                          column: 7,
                        },
                        identifierName: 'alias',
                      },
                      name: 'alias',
                    },
                    computed: false,
                    shorthand: false,
                    value: {
                      type: 'StringLiteral',
                      start: 1976,
                      end: 1986,
                      loc: {
                        start: {
                          line: 36,
                          column: 9,
                        },
                        end: {
                          line: 36,
                          column: 19,
                        },
                      },
                      extra: {
                        rawValue: 'function',
                        raw: "'function'",
                      },
                      value: 'function',
                    },
                  },
                ],
              },
              leadingComments: [
                {
                  type: 'CommentLine',
                  value: ' This must be declared before keyword because we use "function" inside the look-forward',
                  start: 1681,
                  end: 1770,
                  loc: {
                    start: {
                      line: 33,
                      column: 1,
                    },
                    end: {
                      line: 33,
                      column: 90,
                    },
                  },
                },
              ],
            },
            {
              type: 'ObjectProperty',
              start: 1992,
              end: 2968,
              loc: {
                start: {
                  line: 38,
                  column: 1,
                },
                end: {
                  line: 58,
                  column: 2,
                },
              },
              method: false,
              key: {
                type: 'StringLiteral',
                start: 1992,
                end: 2003,
                loc: {
                  start: {
                    line: 38,
                    column: 1,
                  },
                  end: {
                    line: 38,
                    column: 12,
                  },
                },
                extra: {
                  rawValue: 'parameter',
                  raw: "'parameter'",
                },
                value: 'parameter',
              },
              computed: false,
              shorthand: false,
              value: {
                type: 'ArrayExpression',
                start: 2005,
                end: 2968,
                loc: {
                  start: {
                    line: 38,
                    column: 14,
                  },
                  end: {
                    line: 58,
                    column: 2,
                  },
                },
                elements: [
                  {
                    type: 'ObjectExpression',
                    start: 2009,
                    end: 2190,
                    loc: {
                      start: {
                        line: 39,
                        column: 2,
                      },
                      end: {
                        line: 43,
                        column: 3,
                      },
                    },
                    properties: [
                      {
                        type: 'ObjectProperty',
                        start: 2014,
                        end: 2126,
                        loc: {
                          start: {
                            line: 40,
                            column: 3,
                          },
                          end: {
                            line: 40,
                            column: 115,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2014,
                          end: 2021,
                          loc: {
                            start: {
                              line: 40,
                              column: 3,
                            },
                            end: {
                              line: 40,
                              column: 10,
                            },
                            identifierName: 'pattern',
                          },
                          name: 'pattern',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'RegExpLiteral',
                          start: 2023,
                          end: 2126,
                          loc: {
                            start: {
                              line: 40,
                              column: 12,
                            },
                            end: {
                              line: 40,
                              column: 115,
                            },
                          },
                          extra: {
                            raw:
                              '/(function(?:\\s+[_$A-Za-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)?\\s*\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\))/',
                          },
                          pattern:
                            '(function(?:\\s+[_$A-Za-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)?\\s*\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\))',
                          flags: '',
                        },
                      },
                      {
                        type: 'ObjectProperty',
                        start: 2131,
                        end: 2147,
                        loc: {
                          start: {
                            line: 41,
                            column: 3,
                          },
                          end: {
                            line: 41,
                            column: 19,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2131,
                          end: 2141,
                          loc: {
                            start: {
                              line: 41,
                              column: 3,
                            },
                            end: {
                              line: 41,
                              column: 13,
                            },
                            identifierName: 'lookbehind',
                          },
                          name: 'lookbehind',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'BooleanLiteral',
                          start: 2143,
                          end: 2147,
                          loc: {
                            start: {
                              line: 41,
                              column: 15,
                            },
                            end: {
                              line: 41,
                              column: 19,
                            },
                          },
                          value: true,
                        },
                      },
                      {
                        type: 'ObjectProperty',
                        start: 2152,
                        end: 2186,
                        loc: {
                          start: {
                            line: 42,
                            column: 3,
                          },
                          end: {
                            line: 42,
                            column: 37,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2152,
                          end: 2158,
                          loc: {
                            start: {
                              line: 42,
                              column: 3,
                            },
                            end: {
                              line: 42,
                              column: 9,
                            },
                            identifierName: 'inside',
                          },
                          name: 'inside',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'MemberExpression',
                          start: 2160,
                          end: 2186,
                          loc: {
                            start: {
                              line: 42,
                              column: 11,
                            },
                            end: {
                              line: 42,
                              column: 37,
                            },
                          },
                          object: {
                            type: 'MemberExpression',
                            start: 2160,
                            end: 2175,
                            loc: {
                              start: {
                                line: 42,
                                column: 11,
                              },
                              end: {
                                line: 42,
                                column: 26,
                              },
                            },
                            object: {
                              type: 'Identifier',
                              start: 2160,
                              end: 2165,
                              loc: {
                                start: {
                                  line: 42,
                                  column: 11,
                                },
                                end: {
                                  line: 42,
                                  column: 16,
                                },
                                identifierName: 'Prism',
                              },
                              name: 'Prism',
                            },
                            property: {
                              type: 'Identifier',
                              start: 2166,
                              end: 2175,
                              loc: {
                                start: {
                                  line: 42,
                                  column: 17,
                                },
                                end: {
                                  line: 42,
                                  column: 26,
                                },
                                identifierName: 'languages',
                              },
                              name: 'languages',
                            },
                            computed: false,
                          },
                          property: {
                            type: 'Identifier',
                            start: 2176,
                            end: 2186,
                            loc: {
                              start: {
                                line: 42,
                                column: 27,
                              },
                              end: {
                                line: 42,
                                column: 37,
                              },
                              identifierName: 'javascript',
                            },
                            name: 'javascript',
                          },
                          computed: false,
                        },
                      },
                    ],
                  },
                  {
                    type: 'ObjectExpression',
                    start: 2194,
                    end: 2298,
                    loc: {
                      start: {
                        line: 44,
                        column: 2,
                      },
                      end: {
                        line: 47,
                        column: 3,
                      },
                    },
                    properties: [
                      {
                        type: 'ObjectProperty',
                        start: 2199,
                        end: 2255,
                        loc: {
                          start: {
                            line: 45,
                            column: 3,
                          },
                          end: {
                            line: 45,
                            column: 59,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2199,
                          end: 2206,
                          loc: {
                            start: {
                              line: 45,
                              column: 3,
                            },
                            end: {
                              line: 45,
                              column: 10,
                            },
                            identifierName: 'pattern',
                          },
                          name: 'pattern',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'RegExpLiteral',
                          start: 2208,
                          end: 2255,
                          loc: {
                            start: {
                              line: 45,
                              column: 12,
                            },
                            end: {
                              line: 45,
                              column: 59,
                            },
                          },
                          extra: {
                            raw: '/[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*=>)/i',
                          },
                          pattern: '[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*=>)',
                          flags: 'i',
                        },
                      },
                      {
                        type: 'ObjectProperty',
                        start: 2260,
                        end: 2294,
                        loc: {
                          start: {
                            line: 46,
                            column: 3,
                          },
                          end: {
                            line: 46,
                            column: 37,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2260,
                          end: 2266,
                          loc: {
                            start: {
                              line: 46,
                              column: 3,
                            },
                            end: {
                              line: 46,
                              column: 9,
                            },
                            identifierName: 'inside',
                          },
                          name: 'inside',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'MemberExpression',
                          start: 2268,
                          end: 2294,
                          loc: {
                            start: {
                              line: 46,
                              column: 11,
                            },
                            end: {
                              line: 46,
                              column: 37,
                            },
                          },
                          object: {
                            type: 'MemberExpression',
                            start: 2268,
                            end: 2283,
                            loc: {
                              start: {
                                line: 46,
                                column: 11,
                              },
                              end: {
                                line: 46,
                                column: 26,
                              },
                            },
                            object: {
                              type: 'Identifier',
                              start: 2268,
                              end: 2273,
                              loc: {
                                start: {
                                  line: 46,
                                  column: 11,
                                },
                                end: {
                                  line: 46,
                                  column: 16,
                                },
                                identifierName: 'Prism',
                              },
                              name: 'Prism',
                            },
                            property: {
                              type: 'Identifier',
                              start: 2274,
                              end: 2283,
                              loc: {
                                start: {
                                  line: 46,
                                  column: 17,
                                },
                                end: {
                                  line: 46,
                                  column: 26,
                                },
                                identifierName: 'languages',
                              },
                              name: 'languages',
                            },
                            computed: false,
                          },
                          property: {
                            type: 'Identifier',
                            start: 2284,
                            end: 2294,
                            loc: {
                              start: {
                                line: 46,
                                column: 27,
                              },
                              end: {
                                line: 46,
                                column: 37,
                              },
                              identifierName: 'javascript',
                            },
                            name: 'javascript',
                          },
                          computed: false,
                        },
                      },
                    ],
                  },
                  {
                    type: 'ObjectExpression',
                    start: 2302,
                    end: 2431,
                    loc: {
                      start: {
                        line: 48,
                        column: 2,
                      },
                      end: {
                        line: 52,
                        column: 3,
                      },
                    },
                    properties: [
                      {
                        type: 'ObjectProperty',
                        start: 2307,
                        end: 2367,
                        loc: {
                          start: {
                            line: 49,
                            column: 3,
                          },
                          end: {
                            line: 49,
                            column: 63,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2307,
                          end: 2314,
                          loc: {
                            start: {
                              line: 49,
                              column: 3,
                            },
                            end: {
                              line: 49,
                              column: 10,
                            },
                            identifierName: 'pattern',
                          },
                          name: 'pattern',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'RegExpLiteral',
                          start: 2316,
                          end: 2367,
                          loc: {
                            start: {
                              line: 49,
                              column: 12,
                            },
                            end: {
                              line: 49,
                              column: 63,
                            },
                          },
                          extra: {
                            raw: '/(\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\)\\s*=>)/',
                          },
                          pattern: '(\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\)\\s*=>)',
                          flags: '',
                        },
                      },
                      {
                        type: 'ObjectProperty',
                        start: 2372,
                        end: 2388,
                        loc: {
                          start: {
                            line: 50,
                            column: 3,
                          },
                          end: {
                            line: 50,
                            column: 19,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2372,
                          end: 2382,
                          loc: {
                            start: {
                              line: 50,
                              column: 3,
                            },
                            end: {
                              line: 50,
                              column: 13,
                            },
                            identifierName: 'lookbehind',
                          },
                          name: 'lookbehind',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'BooleanLiteral',
                          start: 2384,
                          end: 2388,
                          loc: {
                            start: {
                              line: 50,
                              column: 15,
                            },
                            end: {
                              line: 50,
                              column: 19,
                            },
                          },
                          value: true,
                        },
                      },
                      {
                        type: 'ObjectProperty',
                        start: 2393,
                        end: 2427,
                        loc: {
                          start: {
                            line: 51,
                            column: 3,
                          },
                          end: {
                            line: 51,
                            column: 37,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2393,
                          end: 2399,
                          loc: {
                            start: {
                              line: 51,
                              column: 3,
                            },
                            end: {
                              line: 51,
                              column: 9,
                            },
                            identifierName: 'inside',
                          },
                          name: 'inside',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'MemberExpression',
                          start: 2401,
                          end: 2427,
                          loc: {
                            start: {
                              line: 51,
                              column: 11,
                            },
                            end: {
                              line: 51,
                              column: 37,
                            },
                          },
                          object: {
                            type: 'MemberExpression',
                            start: 2401,
                            end: 2416,
                            loc: {
                              start: {
                                line: 51,
                                column: 11,
                              },
                              end: {
                                line: 51,
                                column: 26,
                              },
                            },
                            object: {
                              type: 'Identifier',
                              start: 2401,
                              end: 2406,
                              loc: {
                                start: {
                                  line: 51,
                                  column: 11,
                                },
                                end: {
                                  line: 51,
                                  column: 16,
                                },
                                identifierName: 'Prism',
                              },
                              name: 'Prism',
                            },
                            property: {
                              type: 'Identifier',
                              start: 2407,
                              end: 2416,
                              loc: {
                                start: {
                                  line: 51,
                                  column: 17,
                                },
                                end: {
                                  line: 51,
                                  column: 26,
                                },
                                identifierName: 'languages',
                              },
                              name: 'languages',
                            },
                            computed: false,
                          },
                          property: {
                            type: 'Identifier',
                            start: 2417,
                            end: 2427,
                            loc: {
                              start: {
                                line: 51,
                                column: 27,
                              },
                              end: {
                                line: 51,
                                column: 37,
                              },
                              identifierName: 'javascript',
                            },
                            name: 'javascript',
                          },
                          computed: false,
                        },
                      },
                    ],
                  },
                  {
                    type: 'ObjectExpression',
                    start: 2435,
                    end: 2965,
                    loc: {
                      start: {
                        line: 53,
                        column: 2,
                      },
                      end: {
                        line: 57,
                        column: 3,
                      },
                    },
                    properties: [
                      {
                        type: 'ObjectProperty',
                        start: 2440,
                        end: 2901,
                        loc: {
                          start: {
                            line: 54,
                            column: 3,
                          },
                          end: {
                            line: 54,
                            column: 464,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2440,
                          end: 2447,
                          loc: {
                            start: {
                              line: 54,
                              column: 3,
                            },
                            end: {
                              line: 54,
                              column: 10,
                            },
                            identifierName: 'pattern',
                          },
                          name: 'pattern',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'RegExpLiteral',
                          start: 2449,
                          end: 2901,
                          loc: {
                            start: {
                              line: 54,
                              column: 12,
                            },
                            end: {
                              line: 54,
                              column: 464,
                            },
                          },
                          extra: {
                            raw:
                              '/((?:\\b|\\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\\w\\xA0-\\uFFFF]))(?:[_$A-Za-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*\\s*)\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\)\\s*\\{)/',
                          },
                          pattern:
                            '((?:\\b|\\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\\w\\xA0-\\uFFFF]))(?:[_$A-Za-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*\\s*)\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\)\\s*\\{)',
                          flags: '',
                        },
                      },
                      {
                        type: 'ObjectProperty',
                        start: 2906,
                        end: 2922,
                        loc: {
                          start: {
                            line: 55,
                            column: 3,
                          },
                          end: {
                            line: 55,
                            column: 19,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2906,
                          end: 2916,
                          loc: {
                            start: {
                              line: 55,
                              column: 3,
                            },
                            end: {
                              line: 55,
                              column: 13,
                            },
                            identifierName: 'lookbehind',
                          },
                          name: 'lookbehind',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'BooleanLiteral',
                          start: 2918,
                          end: 2922,
                          loc: {
                            start: {
                              line: 55,
                              column: 15,
                            },
                            end: {
                              line: 55,
                              column: 19,
                            },
                          },
                          value: true,
                        },
                      },
                      {
                        type: 'ObjectProperty',
                        start: 2927,
                        end: 2961,
                        loc: {
                          start: {
                            line: 56,
                            column: 3,
                          },
                          end: {
                            line: 56,
                            column: 37,
                          },
                        },
                        method: false,
                        key: {
                          type: 'Identifier',
                          start: 2927,
                          end: 2933,
                          loc: {
                            start: {
                              line: 56,
                              column: 3,
                            },
                            end: {
                              line: 56,
                              column: 9,
                            },
                            identifierName: 'inside',
                          },
                          name: 'inside',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'MemberExpression',
                          start: 2935,
                          end: 2961,
                          loc: {
                            start: {
                              line: 56,
                              column: 11,
                            },
                            end: {
                              line: 56,
                              column: 37,
                            },
                          },
                          object: {
                            type: 'MemberExpression',
                            start: 2935,
                            end: 2950,
                            loc: {
                              start: {
                                line: 56,
                                column: 11,
                              },
                              end: {
                                line: 56,
                                column: 26,
                              },
                            },
                            object: {
                              type: 'Identifier',
                              start: 2935,
                              end: 2940,
                              loc: {
                                start: {
                                  line: 56,
                                  column: 11,
                                },
                                end: {
                                  line: 56,
                                  column: 16,
                                },
                                identifierName: 'Prism',
                              },
                              name: 'Prism',
                            },
                            property: {
                              type: 'Identifier',
                              start: 2941,
                              end: 2950,
                              loc: {
                                start: {
                                  line: 56,
                                  column: 17,
                                },
                                end: {
                                  line: 56,
                                  column: 26,
                                },
                                identifierName: 'languages',
                              },
                              name: 'languages',
                            },
                            computed: false,
                          },
                          property: {
                            type: 'Identifier',
                            start: 2951,
                            end: 2961,
                            loc: {
                              start: {
                                line: 56,
                                column: 27,
                              },
                              end: {
                                line: 56,
                                column: 37,
                              },
                              identifierName: 'javascript',
                            },
                            name: 'javascript',
                          },
                          computed: false,
                        },
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: 'ObjectProperty',
              start: 2971,
              end: 3010,
              loc: {
                start: {
                  line: 59,
                  column: 1,
                },
                end: {
                  line: 59,
                  column: 40,
                },
              },
              method: false,
              key: {
                type: 'StringLiteral',
                start: 2971,
                end: 2981,
                loc: {
                  start: {
                    line: 59,
                    column: 1,
                  },
                  end: {
                    line: 59,
                    column: 11,
                  },
                },
                extra: {
                  rawValue: 'constant',
                  raw: "'constant'",
                },
                value: 'constant',
              },
              computed: false,
              shorthand: false,
              value: {
                type: 'RegExpLiteral',
                start: 2983,
                end: 3010,
                loc: {
                  start: {
                    line: 59,
                    column: 13,
                  },
                  end: {
                    line: 59,
                    column: 40,
                  },
                },
                extra: {
                  raw: '/\\b[A-Z](?:[A-Z_]|\\dx?)*\\b/',
                },
                pattern: '\\b[A-Z](?:[A-Z_]|\\dx?)*\\b',
                flags: '',
              },
            },
          ],
        },
      ],
    },
  },
  {
    type: 'ExpressionStatement',
    start: 3016,
    end: 3591,
    loc: {
      start: {
        line: 62,
        column: 0,
      },
      end: {
        line: 85,
        column: 3,
      },
    },
    expression: {
      type: 'CallExpression',
      start: 3016,
      end: 3590,
      loc: {
        start: {
          line: 62,
          column: 0,
        },
        end: {
          line: 85,
          column: 2,
        },
      },
      callee: {
        type: 'MemberExpression',
        start: 3016,
        end: 3044,
        loc: {
          start: {
            line: 62,
            column: 0,
          },
          end: {
            line: 62,
            column: 28,
          },
        },
        object: {
          type: 'MemberExpression',
          start: 3016,
          end: 3031,
          loc: {
            start: {
              line: 62,
              column: 0,
            },
            end: {
              line: 62,
              column: 15,
            },
          },
          object: {
            type: 'Identifier',
            start: 3016,
            end: 3021,
            loc: {
              start: {
                line: 62,
                column: 0,
              },
              end: {
                line: 62,
                column: 5,
              },
              identifierName: 'Prism',
            },
            name: 'Prism',
          },
          property: {
            type: 'Identifier',
            start: 3022,
            end: 3031,
            loc: {
              start: {
                line: 62,
                column: 6,
              },
              end: {
                line: 62,
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
          start: 3032,
          end: 3044,
          loc: {
            start: {
              line: 62,
              column: 16,
            },
            end: {
              line: 62,
              column: 28,
            },
            identifierName: 'insertBefore',
          },
          name: 'insertBefore',
        },
        computed: false,
      },
      arguments: [
        {
          type: 'StringLiteral',
          start: 3045,
          end: 3057,
          loc: {
            start: {
              line: 62,
              column: 29,
            },
            end: {
              line: 62,
              column: 41,
            },
          },
          extra: {
            rawValue: 'javascript',
            raw: "'javascript'",
          },
          value: 'javascript',
        },
        {
          type: 'StringLiteral',
          start: 3059,
          end: 3067,
          loc: {
            start: {
              line: 62,
              column: 43,
            },
            end: {
              line: 62,
              column: 51,
            },
          },
          extra: {
            rawValue: 'string',
            raw: "'string'",
          },
          value: 'string',
        },
        {
          type: 'ObjectExpression',
          start: 3069,
          end: 3589,
          loc: {
            start: {
              line: 62,
              column: 53,
            },
            end: {
              line: 85,
              column: 1,
            },
          },
          properties: [
            {
              type: 'ObjectProperty',
              start: 3072,
              end: 3587,
              loc: {
                start: {
                  line: 63,
                  column: 1,
                },
                end: {
                  line: 84,
                  column: 2,
                },
              },
              method: false,
              key: {
                type: 'StringLiteral',
                start: 3072,
                end: 3089,
                loc: {
                  start: {
                    line: 63,
                    column: 1,
                  },
                  end: {
                    line: 63,
                    column: 18,
                  },
                },
                extra: {
                  rawValue: 'template-string',
                  raw: "'template-string'",
                },
                value: 'template-string',
              },
              computed: false,
              shorthand: false,
              value: {
                type: 'ObjectExpression',
                start: 3091,
                end: 3587,
                loc: {
                  start: {
                    line: 63,
                    column: 20,
                  },
                  end: {
                    line: 84,
                    column: 2,
                  },
                },
                properties: [
                  {
                    type: 'ObjectProperty',
                    start: 3095,
                    end: 3171,
                    loc: {
                      start: {
                        line: 64,
                        column: 2,
                      },
                      end: {
                        line: 64,
                        column: 78,
                      },
                    },
                    method: false,
                    key: {
                      type: 'Identifier',
                      start: 3095,
                      end: 3102,
                      loc: {
                        start: {
                          line: 64,
                          column: 2,
                        },
                        end: {
                          line: 64,
                          column: 9,
                        },
                        identifierName: 'pattern',
                      },
                      name: 'pattern',
                    },
                    computed: false,
                    shorthand: false,
                    value: {
                      type: 'RegExpLiteral',
                      start: 3104,
                      end: 3171,
                      loc: {
                        start: {
                          line: 64,
                          column: 11,
                        },
                        end: {
                          line: 64,
                          column: 78,
                        },
                      },
                      extra: {
                        raw: '/`(?:\\\\[\\s\\S]|\\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\\${)[^\\\\`])*`/',
                      },
                      pattern: '`(?:\\\\[\\s\\S]|\\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\\${)[^\\\\`])*`',
                      flags: '',
                    },
                  },
                  {
                    type: 'ObjectProperty',
                    start: 3175,
                    end: 3187,
                    loc: {
                      start: {
                        line: 65,
                        column: 2,
                      },
                      end: {
                        line: 65,
                        column: 14,
                      },
                    },
                    method: false,
                    key: {
                      type: 'Identifier',
                      start: 3175,
                      end: 3181,
                      loc: {
                        start: {
                          line: 65,
                          column: 2,
                        },
                        end: {
                          line: 65,
                          column: 8,
                        },
                        identifierName: 'greedy',
                      },
                      name: 'greedy',
                    },
                    computed: false,
                    shorthand: false,
                    value: {
                      type: 'BooleanLiteral',
                      start: 3183,
                      end: 3187,
                      loc: {
                        start: {
                          line: 65,
                          column: 10,
                        },
                        end: {
                          line: 65,
                          column: 14,
                        },
                      },
                      value: true,
                    },
                  },
                  {
                    type: 'ObjectProperty',
                    start: 3191,
                    end: 3584,
                    loc: {
                      start: {
                        line: 66,
                        column: 2,
                      },
                      end: {
                        line: 83,
                        column: 3,
                      },
                    },
                    method: false,
                    key: {
                      type: 'Identifier',
                      start: 3191,
                      end: 3197,
                      loc: {
                        start: {
                          line: 66,
                          column: 2,
                        },
                        end: {
                          line: 66,
                          column: 8,
                        },
                        identifierName: 'inside',
                      },
                      name: 'inside',
                    },
                    computed: false,
                    shorthand: false,
                    value: {
                      type: 'ObjectExpression',
                      start: 3199,
                      end: 3584,
                      loc: {
                        start: {
                          line: 66,
                          column: 10,
                        },
                        end: {
                          line: 83,
                          column: 3,
                        },
                      },
                      properties: [
                        {
                          type: 'ObjectProperty',
                          start: 3204,
                          end: 3276,
                          loc: {
                            start: {
                              line: 67,
                              column: 3,
                            },
                            end: {
                              line: 70,
                              column: 4,
                            },
                          },
                          method: false,
                          key: {
                            type: 'StringLiteral',
                            start: 3204,
                            end: 3226,
                            loc: {
                              start: {
                                line: 67,
                                column: 3,
                              },
                              end: {
                                line: 67,
                                column: 25,
                              },
                            },
                            extra: {
                              rawValue: 'template-punctuation',
                              raw: "'template-punctuation'",
                            },
                            value: 'template-punctuation',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'ObjectExpression',
                            start: 3228,
                            end: 3276,
                            loc: {
                              start: {
                                line: 67,
                                column: 27,
                              },
                              end: {
                                line: 70,
                                column: 4,
                              },
                            },
                            properties: [
                              {
                                type: 'ObjectProperty',
                                start: 3234,
                                end: 3250,
                                loc: {
                                  start: {
                                    line: 68,
                                    column: 4,
                                  },
                                  end: {
                                    line: 68,
                                    column: 20,
                                  },
                                },
                                method: false,
                                key: {
                                  type: 'Identifier',
                                  start: 3234,
                                  end: 3241,
                                  loc: {
                                    start: {
                                      line: 68,
                                      column: 4,
                                    },
                                    end: {
                                      line: 68,
                                      column: 11,
                                    },
                                    identifierName: 'pattern',
                                  },
                                  name: 'pattern',
                                },
                                computed: false,
                                shorthand: false,
                                value: {
                                  type: 'RegExpLiteral',
                                  start: 3243,
                                  end: 3250,
                                  loc: {
                                    start: {
                                      line: 68,
                                      column: 13,
                                    },
                                    end: {
                                      line: 68,
                                      column: 20,
                                    },
                                  },
                                  extra: {
                                    raw: '/^`|`$/',
                                  },
                                  pattern: '^`|`$',
                                  flags: '',
                                },
                              },
                              {
                                type: 'ObjectProperty',
                                start: 3256,
                                end: 3271,
                                loc: {
                                  start: {
                                    line: 69,
                                    column: 4,
                                  },
                                  end: {
                                    line: 69,
                                    column: 19,
                                  },
                                },
                                method: false,
                                key: {
                                  type: 'Identifier',
                                  start: 3256,
                                  end: 3261,
                                  loc: {
                                    start: {
                                      line: 69,
                                      column: 4,
                                    },
                                    end: {
                                      line: 69,
                                      column: 9,
                                    },
                                    identifierName: 'alias',
                                  },
                                  name: 'alias',
                                },
                                computed: false,
                                shorthand: false,
                                value: {
                                  type: 'StringLiteral',
                                  start: 3263,
                                  end: 3271,
                                  loc: {
                                    start: {
                                      line: 69,
                                      column: 11,
                                    },
                                    end: {
                                      line: 69,
                                      column: 19,
                                    },
                                  },
                                  extra: {
                                    rawValue: 'string',
                                    raw: "'string'",
                                  },
                                  value: 'string',
                                },
                              },
                            ],
                          },
                        },
                        {
                          type: 'ObjectProperty',
                          start: 3281,
                          end: 3556,
                          loc: {
                            start: {
                              line: 71,
                              column: 3,
                            },
                            end: {
                              line: 81,
                              column: 4,
                            },
                          },
                          method: false,
                          key: {
                            type: 'StringLiteral',
                            start: 3281,
                            end: 3296,
                            loc: {
                              start: {
                                line: 71,
                                column: 3,
                              },
                              end: {
                                line: 71,
                                column: 18,
                              },
                            },
                            extra: {
                              rawValue: 'interpolation',
                              raw: "'interpolation'",
                            },
                            value: 'interpolation',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'ObjectExpression',
                            start: 3298,
                            end: 3556,
                            loc: {
                              start: {
                                line: 71,
                                column: 20,
                              },
                              end: {
                                line: 81,
                                column: 4,
                              },
                            },
                            properties: [
                              {
                                type: 'ObjectProperty',
                                start: 3304,
                                end: 3373,
                                loc: {
                                  start: {
                                    line: 72,
                                    column: 4,
                                  },
                                  end: {
                                    line: 72,
                                    column: 73,
                                  },
                                },
                                method: false,
                                key: {
                                  type: 'Identifier',
                                  start: 3304,
                                  end: 3311,
                                  loc: {
                                    start: {
                                      line: 72,
                                      column: 4,
                                    },
                                    end: {
                                      line: 72,
                                      column: 11,
                                    },
                                    identifierName: 'pattern',
                                  },
                                  name: 'pattern',
                                },
                                computed: false,
                                shorthand: false,
                                value: {
                                  type: 'RegExpLiteral',
                                  start: 3313,
                                  end: 3373,
                                  loc: {
                                    start: {
                                      line: 72,
                                      column: 13,
                                    },
                                    end: {
                                      line: 72,
                                      column: 73,
                                    },
                                  },
                                  extra: {
                                    raw: '/((?:^|[^\\\\])(?:\\\\{2})*)\\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/',
                                  },
                                  pattern: '((?:^|[^\\\\])(?:\\\\{2})*)\\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}',
                                  flags: '',
                                },
                              },
                              {
                                type: 'ObjectProperty',
                                start: 3379,
                                end: 3395,
                                loc: {
                                  start: {
                                    line: 73,
                                    column: 4,
                                  },
                                  end: {
                                    line: 73,
                                    column: 20,
                                  },
                                },
                                method: false,
                                key: {
                                  type: 'Identifier',
                                  start: 3379,
                                  end: 3389,
                                  loc: {
                                    start: {
                                      line: 73,
                                      column: 4,
                                    },
                                    end: {
                                      line: 73,
                                      column: 14,
                                    },
                                    identifierName: 'lookbehind',
                                  },
                                  name: 'lookbehind',
                                },
                                computed: false,
                                shorthand: false,
                                value: {
                                  type: 'BooleanLiteral',
                                  start: 3391,
                                  end: 3395,
                                  loc: {
                                    start: {
                                      line: 73,
                                      column: 16,
                                    },
                                    end: {
                                      line: 73,
                                      column: 20,
                                    },
                                  },
                                  value: true,
                                },
                              },
                              {
                                type: 'ObjectProperty',
                                start: 3401,
                                end: 3551,
                                loc: {
                                  start: {
                                    line: 74,
                                    column: 4,
                                  },
                                  end: {
                                    line: 80,
                                    column: 5,
                                  },
                                },
                                method: false,
                                key: {
                                  type: 'Identifier',
                                  start: 3401,
                                  end: 3407,
                                  loc: {
                                    start: {
                                      line: 74,
                                      column: 4,
                                    },
                                    end: {
                                      line: 74,
                                      column: 10,
                                    },
                                    identifierName: 'inside',
                                  },
                                  name: 'inside',
                                },
                                computed: false,
                                shorthand: false,
                                value: {
                                  type: 'ObjectExpression',
                                  start: 3409,
                                  end: 3551,
                                  loc: {
                                    start: {
                                      line: 74,
                                      column: 12,
                                    },
                                    end: {
                                      line: 80,
                                      column: 5,
                                    },
                                  },
                                  properties: [
                                    {
                                      type: 'ObjectProperty',
                                      start: 3416,
                                      end: 3506,
                                      loc: {
                                        start: {
                                          line: 75,
                                          column: 5,
                                        },
                                        end: {
                                          line: 78,
                                          column: 6,
                                        },
                                      },
                                      method: false,
                                      key: {
                                        type: 'StringLiteral',
                                        start: 3416,
                                        end: 3443,
                                        loc: {
                                          start: {
                                            line: 75,
                                            column: 5,
                                          },
                                          end: {
                                            line: 75,
                                            column: 32,
                                          },
                                        },
                                        extra: {
                                          rawValue: 'interpolation-punctuation',
                                          raw: "'interpolation-punctuation'",
                                        },
                                        value: 'interpolation-punctuation',
                                      },
                                      computed: false,
                                      shorthand: false,
                                      value: {
                                        type: 'ObjectExpression',
                                        start: 3445,
                                        end: 3506,
                                        loc: {
                                          start: {
                                            line: 75,
                                            column: 34,
                                          },
                                          end: {
                                            line: 78,
                                            column: 6,
                                          },
                                        },
                                        properties: [
                                          {
                                            type: 'ObjectProperty',
                                            start: 3453,
                                            end: 3471,
                                            loc: {
                                              start: {
                                                line: 76,
                                                column: 6,
                                              },
                                              end: {
                                                line: 76,
                                                column: 24,
                                              },
                                            },
                                            method: false,
                                            key: {
                                              type: 'Identifier',
                                              start: 3453,
                                              end: 3460,
                                              loc: {
                                                start: {
                                                  line: 76,
                                                  column: 6,
                                                },
                                                end: {
                                                  line: 76,
                                                  column: 13,
                                                },
                                                identifierName: 'pattern',
                                              },
                                              name: 'pattern',
                                            },
                                            computed: false,
                                            shorthand: false,
                                            value: {
                                              type: 'RegExpLiteral',
                                              start: 3462,
                                              end: 3471,
                                              loc: {
                                                start: {
                                                  line: 76,
                                                  column: 15,
                                                },
                                                end: {
                                                  line: 76,
                                                  column: 24,
                                                },
                                              },
                                              extra: {
                                                raw: '/^\\${|}$/',
                                              },
                                              pattern: '^\\${|}$',
                                              flags: '',
                                            },
                                          },
                                          {
                                            type: 'ObjectProperty',
                                            start: 3479,
                                            end: 3499,
                                            loc: {
                                              start: {
                                                line: 77,
                                                column: 6,
                                              },
                                              end: {
                                                line: 77,
                                                column: 26,
                                              },
                                            },
                                            method: false,
                                            key: {
                                              type: 'Identifier',
                                              start: 3479,
                                              end: 3484,
                                              loc: {
                                                start: {
                                                  line: 77,
                                                  column: 6,
                                                },
                                                end: {
                                                  line: 77,
                                                  column: 11,
                                                },
                                                identifierName: 'alias',
                                              },
                                              name: 'alias',
                                            },
                                            computed: false,
                                            shorthand: false,
                                            value: {
                                              type: 'StringLiteral',
                                              start: 3486,
                                              end: 3499,
                                              loc: {
                                                start: {
                                                  line: 77,
                                                  column: 13,
                                                },
                                                end: {
                                                  line: 77,
                                                  column: 26,
                                                },
                                              },
                                              extra: {
                                                rawValue: 'punctuation',
                                                raw: "'punctuation'",
                                              },
                                              value: 'punctuation',
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      type: 'ObjectProperty',
                                      start: 3513,
                                      end: 3545,
                                      loc: {
                                        start: {
                                          line: 79,
                                          column: 5,
                                        },
                                        end: {
                                          line: 79,
                                          column: 37,
                                        },
                                      },
                                      method: false,
                                      key: {
                                        type: 'Identifier',
                                        start: 3513,
                                        end: 3517,
                                        loc: {
                                          start: {
                                            line: 79,
                                            column: 5,
                                          },
                                          end: {
                                            line: 79,
                                            column: 9,
                                          },
                                          identifierName: 'rest',
                                        },
                                        name: 'rest',
                                      },
                                      computed: false,
                                      shorthand: false,
                                      value: {
                                        type: 'MemberExpression',
                                        start: 3519,
                                        end: 3545,
                                        loc: {
                                          start: {
                                            line: 79,
                                            column: 11,
                                          },
                                          end: {
                                            line: 79,
                                            column: 37,
                                          },
                                        },
                                        object: {
                                          type: 'MemberExpression',
                                          start: 3519,
                                          end: 3534,
                                          loc: {
                                            start: {
                                              line: 79,
                                              column: 11,
                                            },
                                            end: {
                                              line: 79,
                                              column: 26,
                                            },
                                          },
                                          object: {
                                            type: 'Identifier',
                                            start: 3519,
                                            end: 3524,
                                            loc: {
                                              start: {
                                                line: 79,
                                                column: 11,
                                              },
                                              end: {
                                                line: 79,
                                                column: 16,
                                              },
                                              identifierName: 'Prism',
                                            },
                                            name: 'Prism',
                                          },
                                          property: {
                                            type: 'Identifier',
                                            start: 3525,
                                            end: 3534,
                                            loc: {
                                              start: {
                                                line: 79,
                                                column: 17,
                                              },
                                              end: {
                                                line: 79,
                                                column: 26,
                                              },
                                              identifierName: 'languages',
                                            },
                                            name: 'languages',
                                          },
                                          computed: false,
                                        },
                                        property: {
                                          type: 'Identifier',
                                          start: 3535,
                                          end: 3545,
                                          loc: {
                                            start: {
                                              line: 79,
                                              column: 27,
                                            },
                                            end: {
                                              line: 79,
                                              column: 37,
                                            },
                                            identifierName: 'javascript',
                                          },
                                          name: 'javascript',
                                        },
                                        computed: false,
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          type: 'ObjectProperty',
                          start: 3561,
                          end: 3580,
                          loc: {
                            start: {
                              line: 82,
                              column: 3,
                            },
                            end: {
                              line: 82,
                              column: 22,
                            },
                          },
                          method: false,
                          key: {
                            type: 'StringLiteral',
                            start: 3561,
                            end: 3569,
                            loc: {
                              start: {
                                line: 82,
                                column: 3,
                              },
                              end: {
                                line: 82,
                                column: 11,
                              },
                            },
                            extra: {
                              rawValue: 'string',
                              raw: "'string'",
                            },
                            value: 'string',
                          },
                          computed: false,
                          shorthand: false,
                          value: {
                            type: 'RegExpLiteral',
                            start: 3571,
                            end: 3580,
                            loc: {
                              start: {
                                line: 82,
                                column: 13,
                              },
                              end: {
                                line: 82,
                                column: 22,
                              },
                            },
                            extra: {
                              raw: '/[\\s\\S]+/',
                            },
                            pattern: '[\\s\\S]+',
                            flags: '',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
  {
    type: 'IfStatement',
    start: 3593,
    end: 3688,
    loc: {
      start: {
        line: 87,
        column: 0,
      },
      end: {
        line: 89,
        column: 1,
      },
    },
    test: {
      type: 'MemberExpression',
      start: 3597,
      end: 3619,
      loc: {
        start: {
          line: 87,
          column: 4,
        },
        end: {
          line: 87,
          column: 26,
        },
      },
      object: {
        type: 'MemberExpression',
        start: 3597,
        end: 3612,
        loc: {
          start: {
            line: 87,
            column: 4,
          },
          end: {
            line: 87,
            column: 19,
          },
        },
        object: {
          type: 'Identifier',
          start: 3597,
          end: 3602,
          loc: {
            start: {
              line: 87,
              column: 4,
            },
            end: {
              line: 87,
              column: 9,
            },
            identifierName: 'Prism',
          },
          name: 'Prism',
        },
        property: {
          type: 'Identifier',
          start: 3603,
          end: 3612,
          loc: {
            start: {
              line: 87,
              column: 10,
            },
            end: {
              line: 87,
              column: 19,
            },
            identifierName: 'languages',
          },
          name: 'languages',
        },
        computed: false,
      },
      property: {
        type: 'Identifier',
        start: 3613,
        end: 3619,
        loc: {
          start: {
            line: 87,
            column: 20,
          },
          end: {
            line: 87,
            column: 26,
          },
          identifierName: 'markup',
        },
        name: 'markup',
      },
      computed: false,
    },
    consequent: {
      type: 'BlockStatement',
      start: 3621,
      end: 3688,
      loc: {
        start: {
          line: 87,
          column: 28,
        },
        end: {
          line: 89,
          column: 1,
        },
      },
      body: [
        {
          type: 'ExpressionStatement',
          start: 3624,
          end: 3686,
          loc: {
            start: {
              line: 88,
              column: 1,
            },
            end: {
              line: 88,
              column: 63,
            },
          },
          expression: {
            type: 'CallExpression',
            start: 3624,
            end: 3685,
            loc: {
              start: {
                line: 88,
                column: 1,
              },
              end: {
                line: 88,
                column: 62,
              },
            },
            callee: {
              type: 'MemberExpression',
              start: 3624,
              end: 3661,
              loc: {
                start: {
                  line: 88,
                  column: 1,
                },
                end: {
                  line: 88,
                  column: 38,
                },
              },
              object: {
                type: 'MemberExpression',
                start: 3624,
                end: 3650,
                loc: {
                  start: {
                    line: 88,
                    column: 1,
                  },
                  end: {
                    line: 88,
                    column: 27,
                  },
                },
                object: {
                  type: 'MemberExpression',
                  start: 3624,
                  end: 3646,
                  loc: {
                    start: {
                      line: 88,
                      column: 1,
                    },
                    end: {
                      line: 88,
                      column: 23,
                    },
                  },
                  object: {
                    type: 'MemberExpression',
                    start: 3624,
                    end: 3639,
                    loc: {
                      start: {
                        line: 88,
                        column: 1,
                      },
                      end: {
                        line: 88,
                        column: 16,
                      },
                    },
                    object: {
                      type: 'Identifier',
                      start: 3624,
                      end: 3629,
                      loc: {
                        start: {
                          line: 88,
                          column: 1,
                        },
                        end: {
                          line: 88,
                          column: 6,
                        },
                        identifierName: 'Prism',
                      },
                      name: 'Prism',
                    },
                    property: {
                      type: 'Identifier',
                      start: 3630,
                      end: 3639,
                      loc: {
                        start: {
                          line: 88,
                          column: 7,
                        },
                        end: {
                          line: 88,
                          column: 16,
                        },
                        identifierName: 'languages',
                      },
                      name: 'languages',
                    },
                    computed: false,
                  },
                  property: {
                    type: 'Identifier',
                    start: 3640,
                    end: 3646,
                    loc: {
                      start: {
                        line: 88,
                        column: 17,
                      },
                      end: {
                        line: 88,
                        column: 23,
                      },
                      identifierName: 'markup',
                    },
                    name: 'markup',
                  },
                  computed: false,
                },
                property: {
                  type: 'Identifier',
                  start: 3647,
                  end: 3650,
                  loc: {
                    start: {
                      line: 88,
                      column: 24,
                    },
                    end: {
                      line: 88,
                      column: 27,
                    },
                    identifierName: 'tag',
                  },
                  name: 'tag',
                },
                computed: false,
              },
              property: {
                type: 'Identifier',
                start: 3651,
                end: 3661,
                loc: {
                  start: {
                    line: 88,
                    column: 28,
                  },
                  end: {
                    line: 88,
                    column: 38,
                  },
                  identifierName: 'addInlined',
                },
                name: 'addInlined',
              },
              computed: false,
            },
            arguments: [
              {
                type: 'StringLiteral',
                start: 3662,
                end: 3670,
                loc: {
                  start: {
                    line: 88,
                    column: 39,
                  },
                  end: {
                    line: 88,
                    column: 47,
                  },
                },
                extra: {
                  rawValue: 'script',
                  raw: "'script'",
                },
                value: 'script',
              },
              {
                type: 'StringLiteral',
                start: 3672,
                end: 3684,
                loc: {
                  start: {
                    line: 88,
                    column: 49,
                  },
                  end: {
                    line: 88,
                    column: 61,
                  },
                },
                extra: {
                  rawValue: 'javascript',
                  raw: "'javascript'",
                },
                value: 'javascript',
              },
            ],
          },
        },
      ],
      directives: [],
    },
    alternate: null,
  },
  {
    type: 'ExpressionStatement',
    start: 3690,
    end: 3738,
    loc: {
      start: {
        line: 91,
        column: 0,
      },
      end: {
        line: 91,
        column: 48,
      },
    },
    expression: {
      type: 'AssignmentExpression',
      start: 3690,
      end: 3737,
      loc: {
        start: {
          line: 91,
          column: 0,
        },
        end: {
          line: 91,
          column: 47,
        },
      },
      operator: '=',
      left: {
        type: 'MemberExpression',
        start: 3690,
        end: 3708,
        loc: {
          start: {
            line: 91,
            column: 0,
          },
          end: {
            line: 91,
            column: 18,
          },
        },
        object: {
          type: 'MemberExpression',
          start: 3690,
          end: 3705,
          loc: {
            start: {
              line: 91,
              column: 0,
            },
            end: {
              line: 91,
              column: 15,
            },
          },
          object: {
            type: 'Identifier',
            start: 3690,
            end: 3695,
            loc: {
              start: {
                line: 91,
                column: 0,
              },
              end: {
                line: 91,
                column: 5,
              },
              identifierName: 'Prism',
            },
            name: 'Prism',
          },
          property: {
            type: 'Identifier',
            start: 3696,
            end: 3705,
            loc: {
              start: {
                line: 91,
                column: 6,
              },
              end: {
                line: 91,
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
          start: 3706,
          end: 3708,
          loc: {
            start: {
              line: 91,
              column: 16,
            },
            end: {
              line: 91,
              column: 18,
            },
            identifierName: 'js',
          },
          name: 'js',
        },
        computed: false,
      },
      right: {
        type: 'MemberExpression',
        start: 3711,
        end: 3737,
        loc: {
          start: {
            line: 91,
            column: 21,
          },
          end: {
            line: 91,
            column: 47,
          },
        },
        object: {
          type: 'MemberExpression',
          start: 3711,
          end: 3726,
          loc: {
            start: {
              line: 91,
              column: 21,
            },
            end: {
              line: 91,
              column: 36,
            },
          },
          object: {
            type: 'Identifier',
            start: 3711,
            end: 3716,
            loc: {
              start: {
                line: 91,
                column: 21,
              },
              end: {
                line: 91,
                column: 26,
              },
              identifierName: 'Prism',
            },
            name: 'Prism',
          },
          property: {
            type: 'Identifier',
            start: 3717,
            end: 3726,
            loc: {
              start: {
                line: 91,
                column: 27,
              },
              end: {
                line: 91,
                column: 36,
              },
              identifierName: 'languages',
            },
            name: 'languages',
          },
          computed: false,
        },
        property: {
          type: 'Identifier',
          start: 3727,
          end: 3737,
          loc: {
            start: {
              line: 91,
              column: 37,
            },
            end: {
              line: 91,
              column: 47,
            },
            identifierName: 'javascript',
          },
          name: 'javascript',
        },
        computed: false,
      },
    },
  },
];
