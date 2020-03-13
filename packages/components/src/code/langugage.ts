export interface PrismLang {
  markup: boolean;
  bash: boolean;
  clike: boolean;
  css: boolean;
  'css-extras': boolean;
  javascript: boolean;
  jsx: boolean;
  'js-extras': boolean;
  git: boolean;
  graphql: boolean;
  handlebars: boolean;
  json: boolean;
  makefile: boolean;
  markdown: boolean;
  ocaml: boolean;
  reason: boolean;
  scss: boolean;
  tsx: boolean;
  typescript: boolean;
  wasm: boolean;
  yaml: true;
}

export const prismLang: PrismLang = {
  markup: true,
  bash: true,
  clike: true,
  css: true,
  'css-extras': true,
  javascript: true,
  jsx: true,
  'js-extras': true,
  git: true,
  graphql: true,
  handlebars: true,
  json: true,
  makefile: true,
  markdown: true,
  ocaml: true,
  reason: true,
  scss: true,
  tsx: true,
  typescript: true,
  wasm: true,
  yaml: true,
};
