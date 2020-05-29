import { Reporter } from 'gatsby';
import { Frontmatter } from '.';

export const hyphenize = (str: string): string =>
  str.toLowerCase().replace(/\s/g, '-').trim();

export const slugify = (
  frontmatter: Frontmatter,
  reporter: Reporter,
): string => {
  if (!frontmatter || !frontmatter.menu || !frontmatter.name) {
    reporter.panicOnBuild(
      '🚨  ERROR: We can not create a slug with out a Frontmatter name and menu',
    );
    return '';
  }
  const basePath = '/';
  const { menu, name } = frontmatter;
  return `/${basePath}/${hyphenize(menu)}/${hyphenize(name)}`.replace(
    /\/\/+/g,
    '/',
  );
};
