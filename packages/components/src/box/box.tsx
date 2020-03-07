/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { HTMLSectionType } from '../layout';
// import { qt } from '../query';

export interface BoxProps {
  readonly tag?: HTMLSectionType;
  readonly p?: SpaceBox;
  readonly px?: SpaceTuple;
  readonly py?: SpaceTuple;
}

export type SpaceTuple = [number, number];
export type SpaceBox = [number, number, number, number];
export type Space = SpaceBox | SpaceTuple | number;
export type SpaceBoxType = 'p' | 'm';

// {
//   p,
//   px,
//   py
// }
export function reduceBoxSpaces(props: BoxProps): SpaceBox {
  return (
    Object.entries(props)
      .filter(([key]) => key.includes('p' || 'm'))
      .sort()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .reduce((acc: any, [_, v]) => {
        if (!Array.isArray(v)) {
          return acc.concat(Array.from({ length: 4 }).map(() => v));
        }
        return acc;
      }, ([] as unknown) as SpaceBox)
  );
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
  return {};
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => {
  const styles = createStylesPadding(props);
  return Boolean(props.tag) ? (
    <props.tag sx={styles}>{props.children}</props.tag>
  ) : (
    <div sx={styles}>{props.children}</div>
  );
};

Box.displayName = 'Box';
