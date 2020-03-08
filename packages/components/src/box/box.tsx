/* eslint-disable @typescript-eslint/no-unused-vars */
/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { HTMLSectionType } from '../layout';

export interface BoxProps {
  readonly tag?: HTMLSectionType;
  readonly p?: SpaceBox | number;
  readonly px?: SpaceTuple | number;
  readonly py?: SpaceTuple | number;
  readonly m?: SpaceBox | number;
  readonly mx?: SpaceTuple | number;
  readonly my?: SpaceTuple | number;
}

export type StyleException = '';
export type SpaceTuple = [number, number];
export type SpaceBox = [number, number, number, number];
export type Space = SpaceBox | SpaceTuple | number;
export type SpaceBoxType = 'p' | 'm';

export function createSpaceBox(props: BoxProps): SpaceBox {
  return Object.entries(props)
    .filter(([key]) => key.includes('p') || key.includes('m'))
    .sort()
    .reduce(reducer, [0, 0, 0, 0]);
}

export function reducer(acc: SpaceBox, [key, val]: [string, SpaceTuple | SpaceBox]): SpaceBox {
  if (!Array.isArray(val) && key === 'p') {
    return (Array.from({ length: 4 }).map(() => val) as unknown) as SpaceBox;
  }
  if (key === 'px' || key === 'mx') {
    return overrideX(acc, val as SpaceTuple);
  }
  if (key === 'py' || key === 'my') {
    return overrideY(acc, val as SpaceTuple);
  }

  return [...val] as SpaceBox;
}

export function overrideX(box: SpaceBox, val: SpaceTuple | number): SpaceBox {
  box.splice(1, 1, Array.isArray(val) ? val[0] : val);
  box.splice(3, 1, Array.isArray(val) ? val[1] : val);
  return [...box] as SpaceBox;
}

export function overrideY(box: SpaceBox, val: SpaceTuple | number): SpaceBox {
  box.splice(0, 1, Array.isArray(val) ? val[0] : val);
  box.splice(2, 1, Array.isArray(val) ? val[1] : val);
  return [...box] as SpaceBox;
}

const createStylesPadding = (props: BoxProps): SxStyleProp => {
  // const p = Object.keys(props)
  //   .filter(k => k.includes('p'))
  //   .sort()
  //   .reduce((prev, curr) => {
  //     if ()
  //   }, {});

  // return {
  //   paddingTop: p.top,
  //   paddingRight: p.right,
  //   paddingBottom: p.bottom,
  //   paddingLeft: p.left,
  // };
  return props;
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => {
  const styles = createStylesPadding(props);
  return Boolean(props.tag) ? (
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <props.tag sx={styles}>{props.children}</props.tag>
  ) : (
    <div sx={styles}>{props.children}</div>
  );
};

Box.displayName = 'Box';
