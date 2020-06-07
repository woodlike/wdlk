export interface LinkNode {
  readonly id: string;
  readonly handle: string;
  readonly title: string;
  readonly menuItems: LinkNode[];
}
