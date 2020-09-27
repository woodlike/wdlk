import React from 'react';
import styled from '../styled';

const StyledTableFrame = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
StyledTableFrame.displayName = 'StyledTableFrame';

export const Frame: React.FC = props => (
  <StyledTableFrame>{props.children}</StyledTableFrame>
);

Frame.displayName = 'Table.Frame';
