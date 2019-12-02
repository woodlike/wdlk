export interface NavLinkProps {
  readonly current: boolean;
  readonly context: NavLinkContext;
  readonly href: string;
  readonly isFocused: boolean;
  readonly text: string;
  readonly children: string | React.ReactNode;
  readonly title?: string;
  readonly className?: string;
}

export type NavLinkContext = 'bar' | 'panel';
