/**@jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';

import { CodeTheme } from '.';
import { Token, TokenStream } from 'prismjs';

export interface TokenStreamProps {
  token: TokenStream;
  theme: CodeTheme;
}

export interface TokenProps {
  content: Token | string;
  theme: CodeTheme;
}

export const TokenSwitch: React.FC<TokenProps> = props => {
  return typeof props.content === 'object' ? (
    <span sx={props.theme.get(props.content.type)}>{props.content.content}</span>
  ) : (
    <span>{props.content}</span>
  );
};

TokenSwitch.displayName = 'TokenSwitch';

export const RecursiveTokenStream: React.FC<TokenStreamProps> = props => (
  <Fragment>
    {Array.isArray(props.token) ? (
      props.token.map((token, idx) => {
        return typeof token === 'object' && Array.isArray(token.content) ? (
          <RecursiveTokenStream token={token.content} theme={props.theme} key={`recursive-token-stream-${idx}`} />
        ) : (
          <TokenSwitch content={token} theme={props.theme} key={`recursive-token-stream-${idx}`} />
        );
      })
    ) : (
      <TokenSwitch content={props.token} theme={props.theme} />
    )}
  </Fragment>
);

RecursiveTokenStream.displayName = 'RecursiveTokenStream';
