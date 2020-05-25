export const mdxAst = {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'name: Heading\nmenu: Components',
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0,
        },
        end: {
          line: 4,
          column: 4,
          offset: 38,
        },
        indent: [1, 1, 1],
      },
    },
    {
      type: 'import',
      value: "import { Heading } from '@wdlk/components';",
      position: {
        start: {
          line: 6,
          column: 1,
          offset: 40,
        },
        end: {
          line: 6,
          column: 44,
          offset: 83,
        },
        indent: [],
      },
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Headings',
          position: {
            start: {
              line: 8,
              column: 3,
              offset: 87,
            },
            end: {
              line: 8,
              column: 11,
              offset: 95,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 8,
          column: 1,
          offset: 85,
        },
        end: {
          line: 8,
          column: 11,
          offset: 95,
        },
        indent: [],
      },
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Heading Sizes',
          position: {
            start: {
              line: 10,
              column: 4,
              offset: 100,
            },
            end: {
              line: 10,
              column: 17,
              offset: 113,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 10,
          column: 1,
          offset: 97,
        },
        end: {
          line: 10,
          column: 17,
          offset: 113,
        },
        indent: [],
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Covers sizes from ',
          position: {
            start: {
              line: 12,
              column: 1,
              offset: 115,
            },
            end: {
              line: 12,
              column: 19,
              offset: 133,
            },
            indent: [],
          },
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 's',
              position: {
                start: {
                  line: 12,
                  column: 21,
                  offset: 135,
                },
                end: {
                  line: 12,
                  column: 22,
                  offset: 136,
                },
                indent: [],
              },
            },
          ],
          position: {
            start: {
              line: 12,
              column: 19,
              offset: 133,
            },
            end: {
              line: 12,
              column: 24,
              offset: 138,
            },
            indent: [],
          },
        },
        {
          type: 'text',
          value: ' to ',
          position: {
            start: {
              line: 12,
              column: 24,
              offset: 138,
            },
            end: {
              line: 12,
              column: 28,
              offset: 142,
            },
            indent: [],
          },
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'xxxl',
              position: {
                start: {
                  line: 12,
                  column: 30,
                  offset: 144,
                },
                end: {
                  line: 12,
                  column: 34,
                  offset: 148,
                },
                indent: [],
              },
            },
          ],
          position: {
            start: {
              line: 12,
              column: 28,
              offset: 142,
            },
            end: {
              line: 12,
              column: 36,
              offset: 150,
            },
            indent: [],
          },
        },
        {
          type: 'text',
          value: '.\nThe heading component also has a ',
          position: {
            start: {
              line: 12,
              column: 36,
              offset: 150,
            },
            end: {
              line: 13,
              column: 34,
              offset: 185,
            },
            indent: [1],
          },
        },
        {
          type: 'inlineCode',
          value: 'tag',
          position: {
            start: {
              line: 13,
              column: 34,
              offset: 185,
            },
            end: {
              line: 13,
              column: 39,
              offset: 190,
            },
            indent: [],
          },
        },
        {
          type: 'text',
          value:
            ' prop that accepts all six section levels according the spec.',
          position: {
            start: {
              line: 13,
              column: 39,
              offset: 190,
            },
            end: {
              line: 13,
              column: 100,
              offset: 251,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 12,
          column: 1,
          offset: 115,
        },
        end: {
          line: 13,
          column: 100,
          offset: 251,
        },
        indent: [1],
      },
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Examples',
          position: {
            start: {
              line: 15,
              column: 5,
              offset: 257,
            },
            end: {
              line: 15,
              column: 13,
              offset: 265,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 15,
          column: 1,
          offset: 253,
        },
        end: {
          line: 15,
          column: 13,
          offset: 265,
        },
        indent: [],
      },
    },
    {
      type: 'jsx',
      value:
        '<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>',
      position: {
        start: {
          line: 17,
          column: 1,
          offset: 267,
        },
        end: {
          line: 34,
          column: 11,
          offset: 672,
        },
        indent: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
    },
    {
      type: 'export',
      value:
        'export const _display = `\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`;',
      position: {
        start: {
          line: 36,
          column: 1,
          offset: 674,
        },
        end: {
          line: 55,
          column: 3,
          offset: 1108,
        },
        indent: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: ';',
          position: {
            start: {
              line: 57,
              column: 1,
              offset: 1110,
            },
            end: {
              line: 57,
              column: 2,
              offset: 1111,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 57,
          column: 1,
          offset: 1110,
        },
        end: {
          line: 57,
          column: 2,
          offset: 1111,
        },
        indent: [],
      },
    },
  ],
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0,
    },
    end: {
      line: 58,
      column: 1,
      offset: 1112,
    },
  },
};
