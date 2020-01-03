import { MiniCardItem } from '../mini-cart/types';

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

export interface NavigationLayerProps {
  readonly isExpanded: boolean;
  readonly items: NavDataProps[];
  readonly login: MiniCardItem,
  readonly url: string;
}

export type NavDataProps = NavData & MenuItems;
