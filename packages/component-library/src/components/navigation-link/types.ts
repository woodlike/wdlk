export interface NavLinkProps {
  readonly current: boolean;
  readonly context: NavLinkContext;
  readonly href: string;
  readonly isFocused: boolean;
  readonly children: string | React.FunctionComponent;
  readonly title?: string;
  readonly className?: string;
}

export type NavLinkContext = 'bar' | 'panel';
