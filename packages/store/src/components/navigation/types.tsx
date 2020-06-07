import { MiniCardItem } from '../MiniCart/types';
import { LinkNode } from '../../hooks';

export interface NavData {
  readonly handle: string;
  readonly title: string;
  readonly url: string;
  readonly id?: string;
}

export interface NavigationProps {
  readonly items: LinkNode[];
  readonly url: string;
}

export interface MenuItems {
  readonly menuItems: NavData[];
  readonly id?: string;
}

export interface NavigationLayerProps {
  readonly isExpanded: boolean;
  readonly items: LinkNode[];
  readonly login: MiniCardItem;
  readonly url: string;
}

export type NavDataProps = NavData & MenuItems;
