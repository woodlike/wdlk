import * as LocalDocs from './docs';
import * as LocalLayout from './layout';
import * as LocalNav from './navigation';
import * as LocalVid from './video';

export * from './burger';
export * from './cart';
export * from './header';
export * from './heading';
export * from './hooks';
export * from './logo';
export * from './mini-cart';
export * from './query';
export * from './text';
export * from './theme';
export * from './utils';
export * from './video';
export * from './with-focus-style';

export const Docs = { ...LocalDocs };
export const Layout = { ...LocalLayout };
export const Nav = { ...LocalNav };
export const Video = { ...LocalVid };
