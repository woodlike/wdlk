import React from 'react';
import { Theme } from '@wdlk/components';
import styled from './styled';
import { css } from '@emotion/core';

export interface SubNavigationProps {
  readonly isExpanded: boolean;
}

const pseudoElementBaseStyles = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
`;

const createPseudoElementStyles = (
  props: { theme: Theme } & SubNavigationProps,
) => css`
  ::before {
    ${pseudoElementBaseStyles};
    width: 100%;
    height: 100%;
    border: 1px solid ${props.theme.colors.border};
    background-color: ${props.theme.colors.background};
    transform: ${props.isExpanded ? 'scale3d(1, 1, 1);' : 'scale3d(1, 0, 1);'}
    transform-origin: top left;
    transition: ${
      props.isExpanded &&
      `transform ${props.theme.transition.duration[0]}s ${props.theme.transition.timing[0]}`
    }
  }

  ::after {
    ${pseudoElementBaseStyles};
    width: 16px;
    height: 16px;
    opacity: ${props.isExpanded ? 1 : 0};
    border-top: solid 1px ${props.theme.colors.border};
    border-left: solid 1px ${props.theme.colors.border};
    background-color: ${props.theme.colors.background};
    transform: translate(250%, -50%) rotate(45deg);
  }
`;

const StyledSubNavigation = styled.div<SubNavigationProps>`
  position: absolute;
  top: ${props => props.theme.header.height}px;
  z-index: 2;
  width: 100%;
  min-width: 440px;
  padding: ${props => props.theme.space[3]}px;
  pointer-events: ${props => (props.isExpanded ? 'auto' : 'none')};
  opacity: ${props => (props.isExpanded ? 1 : 0)};
  transform: translate(-20px, 0);

  ${props => createPseudoElementStyles(props)};
`;

StyledSubNavigation.displayName = 'StyledSubNavigation';

const StyledSubNavList = styled.ul<SubNavigationProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${props => props.theme.space[5]}px;
  grid-row-gap: ${props => props.theme.space[5]}px;
  padding: ${props => `${props.theme.space[4]}px ${props.theme.space[3]}px`};
  opacity: ${props => (props.isExpanded ? 1 : 0)};
  transition: ${props =>
    `opacity ${props.theme.transition.duration[0] / 2}s ${
      props.theme.transition.duration[0] / 1.2
    }s ease-out`};
`;

StyledSubNavList.displayName = 'StyledSubNavList';

export const SubNavigation: React.FC<SubNavigationProps> = props => {
  const { children, isExpanded } = props;
  return (
    <StyledSubNavigation
      role="list"
      aria-hidden={!isExpanded}
      aria-expanded={isExpanded}
      isExpanded={props.isExpanded}>
      <StyledSubNavList isExpanded={props.isExpanded}>
        {children}
      </StyledSubNavList>
    </StyledSubNavigation>
  );
};
