export const clike = [
  {
    type: 'ExpressionStatement',
    start: 0,
    end: 821,
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 30,
        column: 2,
      },
    },
    expression: {
      type: 'AssignmentExpression',
      start: 0,
      end: 820,
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 30,
          column: 1,
        },
      },
      operator: '=',
      left: {
        type: 'MemberExpression',
        start: 0,
        end: 21,
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 21,
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
          end: 21,
          loc: {
            start: {
              line: 1,
              column: 16,
            },
            end: {
              line: 1,
              column: 21,
            },
            identifierName: 'clike',
          },
          name: 'clike',
        },
        computed: false,
      },
      right: {
        type: 'ObjectExpression',
        start: 24,
        end: 820,
        loc: {
          start: {
            line: 1,
            column: 24,
          },
          end: {
            line: 30,
            column: 1,
          },
        },
        properties: [
          {
            type: 'ObjectProperty',
            start: 27,
            end: 195,
            loc: {
              start: {
                line: 2,
                column: 1,
              },
              end: {
                line: 12,
                column: 2,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 27,
              end: 36,
              loc: {
                start: {
                  line: 2,
                  column: 1,
                },
                end: {
                  line: 2,
                  column: 10,
                },
              },
              extra: {
                rawValue: 'comment',
                raw: "'comment'",
              },
              value: 'comment',
            },
            computed: false,
            shorthand: false,
            value: {
              type: 'ArrayExpression',
              start: 38,
              end: 195,
              loc: {
                start: {
                  line: 2,
                  column: 12,
                },
                end: {
                  line: 12,
                  column: 2,
                },
              },
              elements: [
                {
                  type: 'ObjectExpression',
                  start: 42,
                  end: 114,
                  loc: {
                    start: {
                      line: 3,
                      column: 2,
                    },
                    end: {
                      line: 6,
                      column: 3,
                    },
                  },
                  properties: [
                    {
                      type: 'ObjectProperty',
                      start: 47,
                      end: 89,
                      loc: {
                        start: {
                          line: 4,
                          column: 3,
                        },
                        end: {
                          line: 4,
                          column: 45,
                        },
                      },
                      method: false,
                      key: {
                        type: 'Identifier',
                        start: 47,
                        end: 54,
                        loc: {
                          start: {
                            line: 4,
                            column: 3,
                          },
                          end: {
                            line: 4,
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
                        start: 56,
                        end: 89,
                        loc: {
                          start: {
                            line: 4,
                            column: 12,
                          },
                          end: {
                            line: 4,
                            column: 45,
                          },
                        },
                        extra: {
                          raw: '/(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/',
                        },
                        pattern: '(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)',
                        flags: '',
                      },
                    },
                    {
                      type: 'ObjectProperty',
                      start: 94,
                      end: 110,
                      loc: {
                        start: {
                          line: 5,
                          column: 3,
                        },
                        end: {
                          line: 5,
                          column: 19,
                        },
                      },
                      method: false,
                      key: {
                        type: 'Identifier',
                        start: 94,
                        end: 104,
                        loc: {
                          start: {
                            line: 5,
                            column: 3,
                          },
                          end: {
                            line: 5,
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
                        start: 106,
                        end: 110,
                        loc: {
                          start: {
                            line: 5,
                            column: 15,
                          },
                          end: {
                            line: 5,
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
                  start: 118,
                  end: 192,
                  loc: {
                    start: {
                      line: 7,
                      column: 2,
                    },
                    end: {
                      line: 11,
                      column: 3,
                    },
                  },
                  properties: [
                    {
                      type: 'ObjectProperty',
                      start: 123,
                      end: 150,
                      loc: {
                        start: {
                          line: 8,
                          column: 3,
                        },
                        end: {
                          line: 8,
                          column: 30,
                        },
                      },
                      method: false,
                      key: {
                        type: 'Identifier',
                        start: 123,
                        end: 130,
                        loc: {
                          start: {
                            line: 8,
                            column: 3,
                          },
                          end: {
                            line: 8,
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
                        start: 132,
                        end: 150,
                        loc: {
                          start: {
                            line: 8,
                            column: 12,
                          },
                          end: {
                            line: 8,
                            column: 30,
                          },
                        },
                        extra: {
                          raw: '/(^|[^\\\\:])\\/\\/.*/',
                        },
                        pattern: '(^|[^\\\\:])\\/\\/.*',
                        flags: '',
                      },
                    },
                    {
                      type: 'ObjectProperty',
                      start: 155,
                      end: 171,
                      loc: {
                        start: {
                          line: 9,
                          column: 3,
                        },
                        end: {
                          line: 9,
                          column: 19,
                        },
                      },
                      method: false,
                      key: {
                        type: 'Identifier',
                        start: 155,
                        end: 165,
                        loc: {
                          start: {
                            line: 9,
                            column: 3,
                          },
                          end: {
                            line: 9,
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
                        start: 167,
                        end: 171,
                        loc: {
                          start: {
                            line: 9,
                            column: 15,
                          },
                          end: {
                            line: 9,
                            column: 19,
                          },
                        },
                        value: true,
                      },
                    },
                    {
                      type: 'ObjectProperty',
                      start: 176,
                      end: 188,
                      loc: {
                        start: {
                          line: 10,
                          column: 3,
                        },
                        end: {
                          line: 10,
                          column: 15,
                        },
                      },
                      method: false,
                      key: {
                        type: 'Identifier',
                        start: 176,
                        end: 182,
                        loc: {
                          start: {
                            line: 10,
                            column: 3,
                          },
                          end: {
                            line: 10,
                            column: 9,
                          },
                          identifierName: 'greedy',
                        },
                        name: 'greedy',
                      },
                      computed: false,
                      shorthand: false,
                      value: {
                        type: 'BooleanLiteral',
                        start: 184,
                        end: 188,
                        loc: {
                          start: {
                            line: 10,
                            column: 11,
                          },
                          end: {
                            line: 10,
                            column: 15,
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
            start: 198,
            end: 288,
            loc: {
              start: {
                line: 13,
                column: 1,
              },
              end: {
                line: 16,
                column: 2,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 198,
              end: 206,
              loc: {
                start: {
                  line: 13,
                  column: 1,
                },
                end: {
                  line: 13,
                  column: 9,
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
              type: 'ObjectExpression',
              start: 208,
              end: 288,
              loc: {
                start: {
                  line: 13,
                  column: 11,
                },
                end: {
                  line: 16,
                  column: 2,
                },
              },
              properties: [
                {
                  type: 'ObjectProperty',
                  start: 212,
                  end: 269,
                  loc: {
                    start: {
                      line: 14,
                      column: 2,
                    },
                    end: {
                      line: 14,
                      column: 59,
                    },
                  },
                  method: false,
                  key: {
                    type: 'Identifier',
                    start: 212,
                    end: 219,
                    loc: {
                      start: {
                        line: 14,
                        column: 2,
                      },
                      end: {
                        line: 14,
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
                    start: 221,
                    end: 269,
                    loc: {
                      start: {
                        line: 14,
                        column: 11,
                      },
                      end: {
                        line: 14,
                        column: 59,
                      },
                    },
                    extra: {
                      raw: '/(["\'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/',
                    },
                    pattern: '(["\'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1',
                    flags: '',
                  },
                },
                {
                  type: 'ObjectProperty',
                  start: 273,
                  end: 285,
                  loc: {
                    start: {
                      line: 15,
                      column: 2,
                    },
                    end: {
                      line: 15,
                      column: 14,
                    },
                  },
                  method: false,
                  key: {
                    type: 'Identifier',
                    start: 273,
                    end: 279,
                    loc: {
                      start: {
                        line: 15,
                        column: 2,
                      },
                      end: {
                        line: 15,
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
                    start: 281,
                    end: 285,
                    loc: {
                      start: {
                        line: 15,
                        column: 10,
                      },
                      end: {
                        line: 15,
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
            start: 291,
            end: 474,
            loc: {
              start: {
                line: 17,
                column: 1,
              },
              end: {
                line: 23,
                column: 2,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 291,
              end: 303,
              loc: {
                start: {
                  line: 17,
                  column: 1,
                },
                end: {
                  line: 17,
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
              type: 'ObjectExpression',
              start: 305,
              end: 474,
              loc: {
                start: {
                  line: 17,
                  column: 15,
                },
                end: {
                  line: 23,
                  column: 2,
                },
              },
              properties: [
                {
                  type: 'ObjectProperty',
                  start: 309,
                  end: 408,
                  loc: {
                    start: {
                      line: 18,
                      column: 2,
                    },
                    end: {
                      line: 18,
                      column: 101,
                    },
                  },
                  method: false,
                  key: {
                    type: 'Identifier',
                    start: 309,
                    end: 316,
                    loc: {
                      start: {
                        line: 18,
                        column: 2,
                      },
                      end: {
                        line: 18,
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
                    start: 318,
                    end: 408,
                    loc: {
                      start: {
                        line: 18,
                        column: 11,
                      },
                      end: {
                        line: 18,
                        column: 101,
                      },
                    },
                    extra: {
                      raw:
                        '/(\\b(?:class|interface|extends|implements|trait|instanceof|new)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i',
                    },
                    pattern:
                      '(\\b(?:class|interface|extends|implements|trait|instanceof|new)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+',
                    flags: 'i',
                  },
                },
                {
                  type: 'ObjectProperty',
                  start: 412,
                  end: 428,
                  loc: {
                    start: {
                      line: 19,
                      column: 2,
                    },
                    end: {
                      line: 19,
                      column: 18,
                    },
                  },
                  method: false,
                  key: {
                    type: 'Identifier',
                    start: 412,
                    end: 422,
                    loc: {
                      start: {
                        line: 19,
                        column: 2,
                      },
                      end: {
                        line: 19,
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
                    start: 424,
                    end: 428,
                    loc: {
                      start: {
                        line: 19,
                        column: 14,
                      },
                      end: {
                        line: 19,
                        column: 18,
                      },
                    },
                    value: true,
                  },
                },
                {
                  type: 'ObjectProperty',
                  start: 432,
                  end: 471,
                  loc: {
                    start: {
                      line: 20,
                      column: 2,
                    },
                    end: {
                      line: 22,
                      column: 3,
                    },
                  },
                  method: false,
                  key: {
                    type: 'Identifier',
                    start: 432,
                    end: 438,
                    loc: {
                      start: {
                        line: 20,
                        column: 2,
                      },
                      end: {
                        line: 20,
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
                    start: 440,
                    end: 471,
                    loc: {
                      start: {
                        line: 20,
                        column: 10,
                      },
                      end: {
                        line: 22,
                        column: 3,
                      },
                    },
                    properties: [
                      {
                        type: 'ObjectProperty',
                        start: 445,
                        end: 467,
                        loc: {
                          start: {
                            line: 21,
                            column: 3,
                          },
                          end: {
                            line: 21,
                            column: 25,
                          },
                        },
                        method: false,
                        key: {
                          type: 'StringLiteral',
                          start: 445,
                          end: 458,
                          loc: {
                            start: {
                              line: 21,
                              column: 3,
                            },
                            end: {
                              line: 21,
                              column: 16,
                            },
                          },
                          extra: {
                            rawValue: 'punctuation',
                            raw: "'punctuation'",
                          },
                          value: 'punctuation',
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                          type: 'RegExpLiteral',
                          start: 460,
                          end: 467,
                          loc: {
                            start: {
                              line: 21,
                              column: 18,
                            },
                            end: {
                              line: 21,
                              column: 25,
                            },
                          },
                          extra: {
                            raw: '/[.\\\\]/',
                          },
                          pattern: '[.\\\\]',
                          flags: '',
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
            start: 477,
            end: 596,
            loc: {
              start: {
                line: 24,
                column: 1,
              },
              end: {
                line: 24,
                column: 120,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 477,
              end: 486,
              loc: {
                start: {
                  line: 24,
                  column: 1,
                },
                end: {
                  line: 24,
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
              start: 488,
              end: 596,
              loc: {
                start: {
                  line: 24,
                  column: 12,
                },
                end: {
                  line: 24,
                  column: 120,
                },
              },
              extra: {
                raw:
                  '/\\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\\b/',
              },
              pattern:
                '\\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\\b',
              flags: '',
            },
          },
          {
            type: 'ObjectProperty',
            start: 599,
            end: 630,
            loc: {
              start: {
                line: 25,
                column: 1,
              },
              end: {
                line: 25,
                column: 32,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 599,
              end: 608,
              loc: {
                start: {
                  line: 25,
                  column: 1,
                },
                end: {
                  line: 25,
                  column: 10,
                },
              },
              extra: {
                rawValue: 'boolean',
                raw: "'boolean'",
              },
              value: 'boolean',
            },
            computed: false,
            shorthand: false,
            value: {
              type: 'RegExpLiteral',
              start: 610,
              end: 630,
              loc: {
                start: {
                  line: 25,
                  column: 12,
                },
                end: {
                  line: 25,
                  column: 32,
                },
              },
              extra: {
                raw: '/\\b(?:true|false)\\b/',
              },
              pattern: '\\b(?:true|false)\\b',
              flags: '',
            },
          },
          {
            type: 'ObjectProperty',
            start: 633,
            end: 656,
            loc: {
              start: {
                line: 26,
                column: 1,
              },
              end: {
                line: 26,
                column: 24,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 633,
              end: 643,
              loc: {
                start: {
                  line: 26,
                  column: 1,
                },
                end: {
                  line: 26,
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
              start: 645,
              end: 656,
              loc: {
                start: {
                  line: 26,
                  column: 13,
                },
                end: {
                  line: 26,
                  column: 24,
                },
              },
              extra: {
                raw: '/\\w+(?=\\()/',
              },
              pattern: '\\w+(?=\\()',
              flags: '',
            },
          },
          {
            type: 'ObjectProperty',
            start: 659,
            end: 724,
            loc: {
              start: {
                line: 27,
                column: 1,
              },
              end: {
                line: 27,
                column: 66,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 659,
              end: 667,
              loc: {
                start: {
                  line: 27,
                  column: 1,
                },
                end: {
                  line: 27,
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
              start: 669,
              end: 724,
              loc: {
                start: {
                  line: 27,
                  column: 11,
                },
                end: {
                  line: 27,
                  column: 66,
                },
              },
              extra: {
                raw: '/\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?/i',
              },
              pattern: '\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?',
              flags: 'i',
            },
          },
          {
            type: 'ObjectProperty',
            start: 727,
            end: 785,
            loc: {
              start: {
                line: 28,
                column: 1,
              },
              end: {
                line: 28,
                column: 59,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 727,
              end: 737,
              loc: {
                start: {
                  line: 28,
                  column: 1,
                },
                end: {
                  line: 28,
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
              start: 739,
              end: 785,
              loc: {
                start: {
                  line: 28,
                  column: 13,
                },
                end: {
                  line: 28,
                  column: 59,
                },
              },
              extra: {
                raw: '/[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/',
              },
              pattern: '[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]',
              flags: '',
            },
          },
          {
            type: 'ObjectProperty',
            start: 788,
            end: 818,
            loc: {
              start: {
                line: 29,
                column: 1,
              },
              end: {
                line: 29,
                column: 31,
              },
            },
            method: false,
            key: {
              type: 'StringLiteral',
              start: 788,
              end: 801,
              loc: {
                start: {
                  line: 29,
                  column: 1,
                },
                end: {
                  line: 29,
                  column: 14,
                },
              },
              extra: {
                rawValue: 'punctuation',
                raw: "'punctuation'",
              },
              value: 'punctuation',
            },
            computed: false,
            shorthand: false,
            value: {
              type: 'RegExpLiteral',
              start: 803,
              end: 818,
              loc: {
                start: {
                  line: 29,
                  column: 16,
                },
                end: {
                  line: 29,
                  column: 31,
                },
              },
              extra: {
                raw: '/[{}[\\];(),.:]/',
              },
              pattern: '[{}[\\];(),.:]',
              flags: '',
            },
          },
        ],
      },
    },
  },
];
