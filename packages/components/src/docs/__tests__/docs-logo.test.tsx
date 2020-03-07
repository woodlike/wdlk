import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';
import { Logo, Path, intBaseSize, BaseSize } from '..';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Docs.Logo />', () => {
  let logoTitle: string;
  let logoDesc: string;
  let resultBase: BaseSize;

  beforeEach(() => {
    global.console = ({ error: jest.fn() } as unknown) as Console;
    logoTitle = 'Woodlike Docs';
    logoDesc = 'Discover the guidelines and thought processes behind our APIs and design system approach.';
    resultBase = {
      width: 200,
      height: 200,
    };
  });

  afterEach(() => {
    logoTitle = undefined;
    logoDesc = undefined;
    resultBase = undefined;
  });

  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <Logo minX={0} minY={0} width={92} height={46} size="S" title={logoTitle} desc={logoDesc} path={<Path />} />,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should return null and an error message on missing path component', () => {
    const { container, unmount } = render(
      <Logo minX={0} minY={0} width={92} height={46} size="S" title={logoTitle} desc={logoDesc} path={undefined} />,
    );
    expect(container.querySelector('svg')).toBeNull();
    expect(console.error).toHaveBeenCalled();
    unmount();
  });

  describe('Logo internal size handling', () => {
    it('should use the internal "S" Base as default', () => {
      const { container, unmount } = render(
        <Logo size="S" minX={0} minY={0} width={92} height={46} title={logoTitle} desc={logoDesc} path={<Path />} />,
      );

      const logo = container.querySelector('svg');
      expect(logo).toHaveStyleRule('width', `${intBaseSize.width}px`);
      expect(logo).toHaveStyleRule('height', `${intBaseSize.height}px`);
      unmount();
    });

    it('should use the internal "M" Base as default', () => {
      const { container, unmount } = render(
        <Logo size="M" minX={0} minY={0} width={92} height={46} title={logoTitle} desc={logoDesc} path={<Path />} />,
      );

      const logo = container.querySelector('svg');
      expect(logo).toHaveStyleRule('width', `${intBaseSize.width * 2}px`);
      expect(logo).toHaveStyleRule('height', `${intBaseSize.height * 2}px`);
      unmount();
    });

    it('should use the internal "L" Base as default', () => {
      const { container, unmount } = render(
        <Logo size="L" minX={0} minY={0} width={92} height={46} title={logoTitle} desc={logoDesc} path={<Path />} />,
      );

      const logo = container.querySelector('svg');
      expect(logo).toHaveStyleRule('width', `${intBaseSize.width * 3}px`);
      expect(logo).toHaveStyleRule('height', `${intBaseSize.height * 3}px`);
      unmount();
    });

    it('should use the internal "XL" Base as default', () => {
      const { container, unmount } = render(
        <Logo size="XL" minX={0} minY={0} width={92} height={46} title={logoTitle} desc={logoDesc} path={<Path />} />,
      );

      const logo = container.querySelector('svg');
      expect(logo).toHaveStyleRule('width', `${intBaseSize.width * 4}px`);
      expect(logo).toHaveStyleRule('height', `${intBaseSize.height * 4}px`);
      unmount();
    });
  });

  describe('Logo provided size handling', () => {
    it('should use the provided size as the base for "S"', () => {
      const { container, unmount } = render(
        <Logo
          size="S"
          base={{
            width: 200,
            height: 200,
          }}
          minX={0}
          minY={0}
          width={92}
          height={46}
          title={logoTitle}
          desc={logoDesc}
          path={<Path />}
        />,
      );

      const logo = container.querySelector('svg');
      expect(logo).toHaveStyleRule('width', `${resultBase.width}px`);
      expect(logo).toHaveStyleRule('height', `${resultBase.height}px`);
      unmount();
    });

    it('should use size "M" based on the passed size object', () => {
      const { container, unmount } = render(
        <Logo
          size="M"
          base={{
            width: 200,
            height: 200,
          }}
          minX={0}
          minY={0}
          width={92}
          height={46}
          title={logoTitle}
          desc={logoDesc}
          path={<Path />}
        />,
      );

      const logo = container.querySelector('svg');
      expect(logo).toHaveStyleRule('width', `${resultBase.width * 2}px`);
      expect(logo).toHaveStyleRule('height', `${resultBase.height * 2}px`);
      unmount();
    });

    it('should use size "L" based on the passed size object', () => {
      const { container, unmount } = render(
        <Logo
          size="L"
          base={{
            width: 200,
            height: 200,
          }}
          minX={0}
          minY={0}
          width={92}
          height={46}
          title={logoTitle}
          desc={logoDesc}
          path={<Path />}
        />,
      );

      const logo = container.querySelector('svg');
      expect(logo).toHaveStyleRule('width', `${resultBase.width * 3}px`);
      expect(logo).toHaveStyleRule('height', `${resultBase.height * 3}px`);
      unmount();
    });

    it('should use size "XL" based on the passed size object', () => {
      const { container, unmount } = render(
        <Logo
          size="XL"
          base={{
            width: 200,
            height: 200,
          }}
          minX={0}
          minY={0}
          width={92}
          height={46}
          title={logoTitle}
          desc={logoDesc}
          path={<Path />}
        />,
      );

      const logo = container.querySelector('svg');
      expect(logo).toHaveStyleRule('width', `${resultBase.width * 4}px`);
      expect(logo).toHaveStyleRule('height', `${resultBase.height * 4}px`);
      unmount();
    });
  });
});
