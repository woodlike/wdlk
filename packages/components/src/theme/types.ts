import { ButtonVariants } from '.';

export interface Theme {
  readonly borderStyles: string[];
  readonly borderWidths: number[];
  readonly breakpoints: string[];
  readonly colors: ThemeColor;
  readonly fonts: ThemeFontsProps;
  readonly fontSizes: number[];
  readonly fontWeights: number[];
  readonly lineHeights: number[];
  readonly header: string[];
  readonly heading: {
    readonly color: string;
    readonly fonts: {
      readonly primary: string;
      readonly secondary: string;
      readonly campaign: string;
    };
    readonly fontWeight: number;
    readonly modes: {
      color: string;
    };
    readonly xs: TextSize;
    readonly s: TextSize;
    readonly m: TextSize;
    readonly l: TextSize;
    readonly xl: TextSize;
    readonly xxl: TextSize;
  };
  readonly legend: {
    readonly color: string;
    readonly fontFamily: string;
    readonly xs: TextSize;
    readonly s: TextSize;
    readonly m: TextSize;
    readonly l: TextSize;
  };
  readonly link: {
    readonly color: {
      readonly primary: {
        readonly default: string;
        readonly hover: string;
      };
      readonly secondary: {
        readonly default: string;
        readonly hover: string;
      };
    };
    readonly fontFamily: string;
    readonly s: TextSize;
    readonly m: TextSize;
    readonly l: TextSize;
  };
  readonly small: {
    readonly fontFamily: string;
    readonly s: TextSize;
    readonly m: TextSize;
    readonly l: TextSize;
  };
  readonly text: {
    readonly color: string;
    readonly fontFamily: string;
    readonly modes: {
      color: string;
    };
    readonly s: TextSize;
    readonly m: TextSize;
    readonly l: TextSize;
  };
  readonly letterSpacings: number[];
  readonly space: number[];
  readonly transition: ThemeTiming;
  readonly buttons: ButtonVariants;
}

export interface ThemeTiming {
  readonly duration: number[];
  readonly timing: string[];
}

export interface ThemeFontsProps {
  readonly body: string;
  readonly heading: ThemeHeadingProps;
  readonly monospace: string;
}

export interface ThemeHeadingProps {
  readonly display: string;
  readonly campaign: string;
  readonly secondary: string;
}

export interface ThemeColor {
  readonly primary: string;
  readonly secondary: string;
  readonly text: string;
  readonly border: string;
  readonly muted: string;
  readonly mutedHover: string;
  readonly headline: string;
  readonly link: string;
  readonly textInverted: string;
  readonly [key: string]: string | string[];
}

export interface ThemeHeader {
  readonly header: string[];
}

export interface TextSize {
  readonly fontSize: number;
}