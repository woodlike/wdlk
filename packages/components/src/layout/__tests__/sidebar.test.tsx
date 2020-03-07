import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SideBar } from '..';

expect.extend(toHaveNoViolations);

describe('<Layout />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <SideBar position="left" tag="aside">
        <div>Test Sidebar</div>
      </SideBar>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  describe('Rendered prop tag', () => {
    it('should mount with an HTML aside tag', () => {
      const { container, unmount } = render(
        <SideBar position="left" tag="aside">
          <div>Test Sidebar</div>
        </SideBar>,
      );

      expect(container.querySelector('aside')).toBeTruthy();
      unmount();
    });
    it('should mount with an HTML div tag', () => {
      const { container, unmount } = render(
        <SideBar position="left" tag="div">
          <h1>Test Sidebar</h1>
        </SideBar>,
      );

      expect(container.querySelector('div')).toBeTruthy();
      unmount();
    });

    it('should mount with an HTML div tag', () => {
      const { container, unmount } = render(
        <SideBar position="left" tag="section">
          <h1>Test Sidebar</h1>
        </SideBar>,
      );

      expect(container.querySelector('section')).toBeTruthy();
      unmount();
    });

    it('should mount with an HTML div tag', () => {
      const { container, unmount } = render(
        <SideBar position="left" tag="article">
          <h1>Test Sidebar</h1>
        </SideBar>,
      );

      expect(container.querySelector('article')).toBeTruthy();
      unmount();
    });

    it('should mount with an HTML div tag', () => {
      const { container, unmount } = render(
        <SideBar position="left" tag="nav">
          <h1>Test Sidebar</h1>
        </SideBar>,
      );

      expect(container.querySelector('nav')).toBeTruthy();
      unmount();
    });
  });
});
