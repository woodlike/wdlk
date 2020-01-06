export interface NavBarProps {
  itemCount: number;
}

export interface NavPanelProps {
  isExpanded: boolean;
}

export interface NavLayerProps {
  isExpanded: boolean;
}

export interface NavLinkProps {
  readonly current: boolean;
  readonly context: NavLinkContext;
  readonly href: string;
  readonly text: string;
  readonly isFocused: boolean;
  readonly isInverted?: boolean;
  readonly isActive?: boolean;
  readonly children?: false | React.ReactNode;
  readonly title?: string;
  readonly size?: NavLinkSize;
  readonly className?: string;
  readonly onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  readonly onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

export interface BurgerProps {
  isExpanded: boolean;
  readonly onClick: React.MouseEventHandler<HTMLElement>;
}

export type NavLinkContext = 'bar' | 'panel';
export type NavLinkSize = 'S' | 'M' | 'L';
