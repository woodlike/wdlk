import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalCss: React.FC = () => (
  <Global
    styles={css`
      body {
        margin: 0;
      }
    `}
  />
);
