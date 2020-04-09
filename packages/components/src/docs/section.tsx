/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { useThemeQuery } from '../theme/query';
import { Code, Language, CodeSize } from '../Code';

export interface DocsSectionProps {
  breakpoint: number;
  code: string;
  lang: Language;
  size: CodeSize;
}

const stylesSection: SxStyleProp = {
  display: 'flex',
  flexDirection: 'row',
};

const stylesContent: SxStyleProp = {
  flexGrow: 3,
};

const stylesCode: SxStyleProp = {
  flexGrow: 2,
};

const createStylesSection = (breakpoint: string): SxStyleProp => ({
  ...stylesSection,
  [`@media screen and (min-width: ${breakpoint})`]: {
    flexDirection: 'column',
  },
});

export const Section: React.FC<DocsSectionProps> = props => {
  const { qt } = useThemeQuery();
  return (
    <section sx={createStylesSection(qt('breakpoints')(props.breakpoint))}>
      <div sx={stylesContent}>{props.children}</div>
      <div sx={stylesCode}>
        <Code code={props.code} lang={props.lang} size={props.size} />
      </div>
    </section>
  );
};

Section.displayName = 'Docs.Section';
