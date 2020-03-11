import { ThemeQuery } from 'theme-query';

export interface LinkProps {
  readonly as: LinkType;
  readonly size: LinkSize;
  readonly href?: string;
  readonly onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export type LinkType = 'a' | 'span' | 'strong';
export type LinkSize = 's' | 'm' | 'l' | 'xl';

export const handleLinkSize = (size: LinkSize, qt: ThemeQuery): string => {
  switch (size) {
    case 's':
      return qt('fontSizes')(1);
    case 'm':
      return qt('fontSizes')(2);
    case 'l':
      return qt('fontSizes')(3);
    case 'xl':
      return qt('fontSizes')(4);
  }
};
