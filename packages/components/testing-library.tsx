import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from './src';
const ComponentProviders: React.FC = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: ComponentProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
