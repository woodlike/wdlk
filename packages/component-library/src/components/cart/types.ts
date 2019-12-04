export interface CartProps {
  href: string;
  isFocused: boolean;
  isFilled: boolean;
  title: string;
  count: number | undefined;
  className?: string;
}
