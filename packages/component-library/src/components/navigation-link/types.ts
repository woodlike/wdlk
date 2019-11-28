export interface NavLinkProps {
  readonly current: boolean;
  readonly href: string;
  readonly isFocused: boolean;
  readonly children: string | React.FunctionComponent;
  readonly title?: string;
  readonly className?: string;
}
