import { Reporter } from 'gatsby';

import { gatsby } from '../../__mocks__';
import { slugify, hyphenize, Frontmatter } from '..';

describe('utils', () => {
  describe('hyphenize', () => {
    it('should returned a hyphenized version of Punk in Drublic', () => {
      expect(hyphenize('Punk in Drublic')).toBe('punk-in-drublic');
    });
    it('should returned a hyphenized version of And Out Come the Wolves', () => {
      expect(hyphenize('And Out Come the Wolves')).toBe(
        'and-out-come-the-wolves',
      );
    });
    it('should returned a hyphenized version of Higher Order Functions', () => {
      expect(hyphenize('Higher Order Functions')).toBe(
        'higher-order-functions',
      );
    });
  });
  describe('slugify()', () => {
    const { reporter } = gatsby;

    it('should have called reporter on missing frontmatter object', () => {
      const slug = slugify(
        {} as Frontmatter,
        (reporter as unknown) as Reporter,
      );
      expect(reporter.panicOnBuild).toHaveBeenCalled();
      expect(slug).toBe('');
    });

    it('should have called reporter on missing frontmatter menu', () => {
      const slug = slugify(
        { name: 'Under Pressure' } as Frontmatter,
        (reporter as unknown) as Reporter,
      );
      expect(reporter.panicOnBuild).toHaveBeenCalled();
      expect(slug).toBe('');
    });

    it('should have called reporter on missing frontmatter menu', () => {
      const slug = slugify(
        { menu: 'Hocs' } as Frontmatter,
        (reporter as unknown) as Reporter,
      );
      expect(reporter.panicOnBuild).toHaveBeenCalled();
      expect(slug).toBe('');
    });

    it('should return a slugified string /javascript-parser/babel', () => {
      const frontmatter: Frontmatter = {
        name: 'babel',
        menu: 'JavaScript Parser',
        title: '',
      };
      expect(slugify(frontmatter, (reporter as unknown) as Reporter)).toBe(
        '/javascript-parser/babel',
      );
    });
    it('should return a slugified string /components/some-awesome-component', () => {
      const frontmatter: Frontmatter = {
        name: 'Some Awesome Component',
        menu: 'Components',
        title: '',
      };
      expect(slugify(frontmatter, (reporter as unknown) as Reporter)).toBe(
        '/components/some-awesome-component',
      );
    });
    it('should return a slugified string /hooks/that-hook', () => {
      const frontmatter: Frontmatter = {
        name: 'that-hook',
        menu: 'Hooks',
        title: '',
      };
      expect(slugify(frontmatter, (reporter as unknown) as Reporter)).toBe(
        '/hooks/that-hook',
      );
    });
  });
});
