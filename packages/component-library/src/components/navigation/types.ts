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
  readonly isFocused: boolean;
  readonly text: string;
  readonly children: string | React.ReactNode;
  readonly title?: string;
  readonly className?: string;
  readonly onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  readonly onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

export type NavLinkContext = 'bar' | 'panel';
