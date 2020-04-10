import * as ColorQuery from './color';
import * as InternalScale from './scale';

export * from './query';
export * from './scale';
export * from './theme';

export const Color = { ...ColorQuery };
export const Scale = { ...InternalScale };
