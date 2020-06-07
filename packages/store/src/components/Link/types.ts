export interface LinkProps {
  readonly size: number;
  readonly as?: LinkType;
  readonly href?: string;
  readonly onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export type LinkType = 'a' | 'span' | 'strong';
