export interface NavData {
  readonly handle: string;
  readonly title: string;
  readonly url: string;
}

export interface NavigationProps {
  readonly items: NavDataProps[];
  readonly url: string;
}

export interface MenuItems {
  readonly menuItems: NavData[];
}

export type NavDataProps = NavData & MenuItems;
