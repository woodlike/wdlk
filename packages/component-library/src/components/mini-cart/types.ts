export interface MiniCartProps {
  children: [JSX.Element, JSX.Element, JSX.Element];
}

export interface MiniCartLinkProps {
  children: string;
  href: string;
  isFocused: boolean;
  className?: string;
}
