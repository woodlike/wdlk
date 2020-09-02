import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

export interface AccordionItemProps {
  readonly ariaId: string;
  readonly isExpanded: boolean;
  readonly headerSlot: JSX.Element;
}

interface StyledAccordionItemProps {
  readonly isExpanded: boolean;
}

interface StyledContentProps {
  readonly isExpanded: boolean;
  readonly height: number;
}

// This is intentionally a button to be compliant with the WAI-ARIA Disclosure Pattern.
const StyledButton = styled.button<StyledAccordionItemProps>``;

StyledButton.displayName = 'Accordion.StyledButton';

const StyledContent = styled.dd<StyledContentProps>`
  max-height: ${props => (props.isExpanded ? props.height : 0)};
`;

StyledContent.displayName = 'Accordion.StyledContent';

export const Item: React.FC<AccordionItemProps> = props => {
  const contentEl = useRef<Element>(null);
  const [contentHeight, setHeight] = useState(0);
  useEffect(() => {
    if (!!contentEl.current) {
      const { height } = contentEl.current.getBoundingClientRect();
      setHeight(height);
    }
  }, []);

  return (
    <>
      <dt>
        <StyledButton
          aria-controls={props.ariaId}
          isExpanded={props.isExpanded}>
          {props.headerSlot}
        </StyledButton>
      </dt>
      <StyledContent
        ref={contentEl}
        height={contentHeight}
        id={props.ariaId}
        isExpanded={props.isExpanded}>
        {props.children}
      </StyledContent>
    </>
  );
};

Item.displayName = 'Accordion.Item';
