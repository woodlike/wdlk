import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { Headline } from '.';
import { qt } from '../..';

expect.extend(toHaveNoViolations);
expect.extend(matchers);
describe('<Headline />', () => {
  describe('Accessibility validation', () => {
    it('should not have any accessibility violations', async done => {
      const { container, unmount } = render(
        <Headline tag="h1" size="xl" inverted={false}>
          Healing Flowers Collection
        </Headline>
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
        <Headline tag="h1" size="xl" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );
      const h1 = container.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1).not.toBeNull();
    });

    it('should return an HTML h2', () => {
      const { container } = render(
        <Headline tag="h2" size="xl" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );
      const h2 = container.querySelector('h2');
      expect(h2).toBeTruthy();
      expect(h2).not.toBeNull();
    });

    it('should return an HTML h3', () => {
      const { container } = render(
        <Headline tag="h3" size="xl" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );
      const h3 = container.querySelector('h3');
      expect(h3).toBeTruthy();
      expect(h3).not.toBeNull();
    });

    it('should return an HTML h4', () => {
      const { container } = render(
        <Headline tag="h4" size="xl" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );
      const h4 = container.querySelector('h4');
      expect(h4).toBeTruthy();
      expect(h4).not.toBeNull();
    });

    it('should return an HTML h5', () => {
      const { container } = render(
        <Headline tag="h5" size="xl" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );
      const h5 = container.querySelector('h5');
      expect(h5).toBeTruthy();
      expect(h5).not.toBeNull();
    });

    it('should return an HTML h6', () => {
      const { container } = render(
        <Headline tag="h6" size="xl" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );
      const h6 = container.querySelector('h6');
      expect(h6).toBeTruthy();
      expect(h6).not.toBeNull();
    });
  });

  describe('Returns the expeced font size', () => {
    it('should have a font size of 18px', () => {
      const { container } = render(
        <Headline tag="h2" size="s" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );
      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('spaces')(4)}px`);
    });

    it('should have a font size of 24px', () => {
      const { container } = render(
        <Headline tag="h2" size="m" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('spaces')(5)}px`);
    });

    it('should have a font size of 36px', () => {
      const { container } = render(
        <Headline tag="h2" size="l" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('spaces')(7)}px`);
    });

    it('should have a font size of 48px', () => {
      const { container } = render(
        <Headline tag="h2" size="xl" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('spaces')(8)}px`);
    });

    it('should have a font size of 72px', () => {
      const { container } = render(
        <Headline tag="h2" size="xxl" inverted={false}>
          Healing Flowers Collection
        </Headline>
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${qt('spaces')(9)}px`);
    });
  });
});
