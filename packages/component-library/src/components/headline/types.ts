export interface HeadlineProps {
  tag: Headline;
  size: HeadlineSize;
}

export type Headline = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadlineSize = 's' | 'm' | 'l' | 'xl' | 'xxl';