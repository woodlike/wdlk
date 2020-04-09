import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { Heading } from '.';
import { qt } from '../theme/query';

expect.extend(toHaveNoViolations);
expect.extend(matchers);
describe('<Heading />', () => {
  describe('Accessibility validation', () => {
    it('should not have any accessibility violations', async done => {
      const { container, unmount } = render(
        <Heading as="h1" size="xl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );

      const a11yResults = await axe(container);
      expect(a11yResults).toHaveNoViolations();
      cleanup();
      unmount();
      done();
    });
  });

  describe('Returns expected HTML tag', () => {
    it('should return an HTML h1', () => {
      const { container } = render(
        <Heading as="h1" size="xl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );
      const h1 = container.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1).not.toBeNull();
    });

    it('should return an HTML h2', () => {
      const { container } = render(
        <Heading as="h2" size="xl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );
      const h2 = container.querySelector('h2');
      expect(h2).toBeTruthy();
      expect(h2).not.toBeNull();
    });

    it('should return an HTML h3', () => {
      const { container } = render(
        <Heading as="h3" size="xl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );
      const h3 = container.querySelector('h3');
      expect(h3).toBeTruthy();
      expect(h3).not.toBeNull();
    });

    it('should return an HTML h4', () => {
      const { container } = render(
        <Heading as="h4" size="xl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );
      const h4 = container.querySelector('h4');
      expect(h4).toBeTruthy();
      expect(h4).not.toBeNull();
    });

    it('should return an HTML h5', () => {
      const { container } = render(
        <Heading as="h5" size="xl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );
      const h5 = container.querySelector('h5');
      expect(h5).toBeTruthy();
      expect(h5).not.toBeNull();
    });

    it('should return an HTML h6', () => {
      const { container } = render(
        <Heading as="h6" size="xl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );
      const h6 = container.querySelector('h6');
      expect(h6).toBeTruthy();
      expect(h6).not.toBeNull();
    });
  });

  describe('Returns the expeced font size', () => {
    it('should have a font size of 18px', () => {
      const { container } = render(
        <Heading as="h2" size="xs" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );
      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('fontSizes')(3)}px`);
    });

    it('should have a font size of 20px', () => {
      const { container } = render(
        <Heading as="h2" size="s" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('fontSizes')(4)}px`);
    });

    it('should have a font size of 24px', () => {
      const { container } = render(
        <Heading as="h2" size="m" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('fontSizes')(5)}px`);
    });

    it('should have a font size of 32px', () => {
      const { container } = render(
        <Heading as="h2" size="l" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('fontSizes')(6)}px`);
    });

    it('should have a font size of 44px', () => {
      const { container } = render(
        <Heading as="h2" size="xl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('fontSizes')(7)}px`);
    });

    it('should have a font size of 72px', () => {
      const { container } = render(
        <Heading as="h2" size="xxl" inverted={false}>
          Healing Flowers Collection
        </Heading>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('fontSizes')(8)}px`);
    });
  });

  describe('Returns the expected font-family', () => {
    it('should have use `"Museo", serif` font-family as default', () => {
      const { container } = render(
        <Heading as="h1" size="s">
          Healing Flowers Collection
        </Heading>,
      );
      const h2 = container.querySelector('h1');
      expect(h2).toHaveStyleRule('font-family', `"Museo",serif`);
    });
    it('should have use `"MuseoSans",Helvetica,sans-serif`', () => {
      const { container } = render(
        <Heading as="h1" size="s" family="secondary">
          Healing Flowers Collection
        </Heading>,
      );
      const h1 = container.querySelector('h1');
      expect(h1).toHaveStyleRule('font-family', `"MuseoSans",Helvetica,sans-serif`);
    });
    it('should have use `"Challista_signature", serif` font-family', () => {
      const { container } = render(
        <Heading as="h1" size="s" family="campaign">
          Healing Flowers Collection
        </Heading>,
      );
      const h1 = container.querySelector('h1');
      expect(h1).toHaveStyleRule('font-family', `"Challista_signature",serif`);
    });
  });
});
