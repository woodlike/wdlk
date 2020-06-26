/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { withFocusStyle, Theme } from '@wdlk/components';

export interface LogoProps {
  readonly href: string;
  readonly title: string;
  readonly desc: string;
  readonly isFocused: boolean;
  readonly className?: string;
}

const logo = {
  width: 150,
  height: 38,
};

const styledSVG: SxStyleProp = {
  display: 'block',
  width: `${logo.width}px`,
  height: `${logo.height}px`,
  fill: 'currentColor',
  color: ({ colors }: Theme) => colors.blacks[0],
  cursor: 'pointer',
  transition: ({ transition }: Theme) =>
    `color ${transition.duration[1]}s ${transition.timing[0]}`,
  ':hover': {
    color: ({ colors }: Theme) => colors.grays[2],
  },
};

export const LogoPath: React.FC = () => (
  <Fragment>
    <path d="M22.319 19.513c-.444 0-.816.14-1.619.907-1.699 1.623-1.65 2.134-1.078 3.184 1.033 1.896 2.382 2.983 3.702 2.983.769 0 1.53-.354 2.261-1.053.964-.921 1.401-1.858 1.297-2.785-.103-.915-.699-1.709-1.182-2.214-.371-.389-1.778-.718-2.379-.858l-.222-.052a3.415 3.415 0 00-.78-.112zm1.005 9.01c-2.081 0-3.999-1.418-5.402-3.993-1.239-2.274-.41-3.743 1.441-5.511.907-.866 1.756-1.443 2.956-1.443.366 0 .769.053 1.23.164l.213.05c1.3.304 2.628.663 3.338 1.406.987 1.033 1.576 2.186 1.706 3.335.175 1.559-.458 3.041-1.883 4.402-1.089 1.041-2.333 1.59-3.599 1.59z" />
    <path d="M24.138 13.623c-.658 0-1.371.042-2.118.124-1.851.204-3.581 1.628-4.971 2.773-.472.389-.918.756-1.34 1.055-2.468 1.75-2.795 4.507-1.061 8.941.639 1.633 2.427 4.507 7.232 5.414.204.039.418.081.639.126.991.197 2.113.421 3.138.421.771 0 1.373-.124 1.841-.38 4.803-2.629 5.799-8.354 4.69-12.56-1.065-4.035-3.622-5.914-8.05-5.914zm1.517 20.79c-1.216 0-2.438-.244-3.517-.459a47.02 47.02 0 00-.619-.121c-4.179-.789-7.341-3.199-8.676-6.611-.757-1.934-3.06-7.821 1.744-11.226.365-.259.785-.604 1.229-.97 1.588-1.308 3.565-2.935 5.989-3.203.818-.09 1.602-.136 2.331-.136 5.297 0 8.635 2.475 9.921 7.356 1.294 4.912.083 11.624-5.633 14.752-.758.416-1.665.618-2.769.618z" />
    <path d="M23.79 7.57c-3.637 0-7.096 1.752-10.577 5.356-.27.28-.547.559-.825.84-1.916 1.936-3.897 3.939-4.24 6.635C6.845 30.665 11 36.424 20.85 38.008c1.524.245 3.249.522 4.815.522.933 0 1.711-.095 2.38-.291 2.42-.707 3.622-2.031 5.614-4.224.642-.706 1.369-1.507 2.231-2.388 1.172-1.198 1.637-4.654 1.945-6.941.075-.558.146-1.086.22-1.548.827-5.143-1.012-7.406-5.109-11.014l-.273-.24c-2.069-1.827-4.208-3.715-6.956-4.157a12.191 12.191 0 00-1.927-.157zm1.875 32.897c-1.721 0-3.527-.291-5.12-.547C9.602 38.16 4.786 31.512 6.227 20.157c.425-3.348 2.741-5.689 4.784-7.754.272-.275.543-.549.808-.824 3.865-4.002 7.78-5.947 11.97-5.947.734 0 1.487.061 2.236.182 3.301.531 5.761 2.702 7.93 4.617l.271.239c4.124 3.633 6.752 6.485 5.741 12.775-.071.438-.14.953-.213 1.499-.383 2.842-.859 6.38-2.48 8.037a82.03 82.03 0 00-2.182 2.336c-2.067 2.275-3.561 3.92-6.504 4.78-.847.249-1.804.37-2.923.37z" />
    <path d="M25.69 2.087c-1.437 0-2.709.272-4.181.586-.751.16-1.527.326-2.396.472C11.154 4.48 10.029 6.14 7.788 9.449A64.966 64.966 0 016.7 11.021C2.3 17.153.925 22.445 2.497 27.2c1.609 4.867 2.172 6.26 4.008 8.771 2.909 3.977 6.532 6.175 11.076 6.721 1.411.169 2.589.439 3.729.701 1.452.333 2.707.621 4.124.621.726 0 1.445-.076 2.199-.233 5.33-1.107 6.687-2.822 8.124-4.637.643-.813 1.308-1.653 2.307-2.445 5.057-4.009 5.172-5.626 5.4-8.846.053-.746.113-1.591.238-2.551.072-.55.158-1.08.241-1.592.285-1.753.531-3.268.164-5.036C41.663 6.899 35.328 4.689 30.702 3.076l-.169-.059c-1.817-.635-3.355-.93-4.843-.93zm-.256 43.863c-1.637 0-3.055-.325-4.557-.669-1.09-.25-2.218-.509-3.527-.666-5.035-.605-9.21-3.129-12.408-7.501-1.986-2.716-2.624-4.286-4.284-9.307-1.78-5.384-.318-11.244 4.469-17.915a65.4 65.4 0 001.058-1.53c2.587-3.82 4.204-5.718 12.608-7.128.826-.139 1.581-.3 2.312-.456 1.514-.323 2.944-.629 4.586-.629 1.711 0 3.453.33 5.481 1.038l.169.059c4.486 1.565 11.996 4.184 14.664 17.033.44 2.12.141 3.961-.148 5.741-.081.497-.165 1.012-.233 1.532-.118.902-.173 1.682-.227 2.436-.243 3.425-.403 5.688-6.129 10.227-.822.652-1.39 1.369-1.991 2.129-1.514 1.913-3.231 4.082-9.249 5.332-.886.185-1.734.274-2.594.274z" />
  </Fragment>
);

export const BrandPath: React.FC = () => (
  <g>
    <path d="M184.829 17.728h-1.301v-1.721h8.302c.9 0 1.28.38 1.28 1.28v1.78h-1.82v-.899c0-.301-.16-.44-.439-.44h-4.021v4.421h4.941v1.721h-4.941v4.101c0 .28.16.44.44.44h4.121c.28 0 .439-.16.439-.44v-.9h1.841v1.78c0 .9-.38 1.28-1.28 1.28h-6.281c-.9 0-1.28-.38-1.28-1.28V17.728zM167.9 18.132c0-.298-.159-.437-.437-.437h-.854v-1.709h2.006c.894 0 1.272.378 1.272 1.272v4.63h1.331c.516 0 .914-.079 1.153-.477l3.119-5.424h2.226l-3.398 5.822c-.398.695-.795.914-.795.914v.04s.397.099.795.874l2.106 4.212c.199.417.517.457.993.457h.378v1.709h-1.093c-1.093 0-1.49-.139-1.947-1.053l-2.424-4.868c-.238-.457-.675-.516-1.251-.516h-1.193v6.437H167.9V18.132zM156.269 28.341h1.381V17.659h-1.381v-1.721h4.661v1.721h-1.38v10.682h1.38v1.721h-4.661v-1.721zM142.474 18.132c0-.298-.159-.437-.437-.437h-.854v-1.709h2.007c.894 0 1.272.378 1.272 1.272v10.61c0 .278.159.437.437.437h3.874c.278 0 .437-.159.437-.437v-.894h1.808v1.768c0 .894-.378 1.272-1.272 1.272h-6.001c-.894 0-1.272-.378-1.272-1.272v-10.61h.001zM126.928 28.305h1.828c3.119 0 5.166-1.868 5.166-5.325 0-3.437-2.066-5.285-5.166-5.285h-2.265v10.173c-.001.278.158.437.437.437zm-2.424-10.61h-1.291v-1.709h5.682c4.272 0 7.094 2.563 7.094 6.994 0 4.45-2.821 7.033-7.094 7.033h-3.119c-.894 0-1.272-.378-1.272-1.272V17.695zM92.192 16c3.912 0 6.962 3.011 6.962 6.904 0 3.989-3.049 7.096-6.962 7.096s-6.943-3.107-6.943-7.096c0-3.893 3.031-6.904 6.943-6.904zm0 12.197c2.742 0 4.967-2.302 4.967-5.293 0-2.896-2.224-5.12-4.967-5.12s-4.948 2.224-4.948 5.12c.001 2.992 2.206 5.293 4.948 5.293zM111.192 16c3.912 0 6.962 3.011 6.962 6.904 0 3.989-3.049 7.096-6.962 7.096s-6.943-3.107-6.943-7.096c0-3.893 3.031-6.904 6.943-6.904zm0 12.197c2.742 0 4.967-2.302 4.967-5.293 0-2.896-2.224-5.12-4.967-5.12s-4.948 2.224-4.948 5.12c.001 2.992 2.206 5.293 4.948 5.293zM62.675 18.132c-.099-.357-.318-.437-.676-.437h-.298v-1.709h1.133c.993 0 1.49.199 1.728 1.152l2.166 9.02c.179.755.278 1.49.278 1.49h.04s.119-.715.338-1.49l2.821-10.133h1.788l2.623 10.133c.198.775.298 1.49.298 1.49h.04s.079-.735.258-1.49l2.205-9.02c.239-.954.715-1.152 1.709-1.152h1.133v1.709h-.298c-.357 0-.576.08-.675.437l-3.08 11.881h-2.304l-2.384-8.861c-.239-.914-.398-1.927-.398-1.927h-.04s-.199 1.013-.457 1.907l-2.543 8.881h-2.325l-3.08-11.881z" />
  </g>
);

export const LogoBase: React.FunctionComponent<LogoProps> = (
  props,
): JSX.Element => {
  return (
    <a data-testid="logo-test-id" href={props.href}>
      <svg
        sx={styledSVG}
        className={props.className}
        aria-labelledby="logo-title-aria-id"
        viewBox="0 0 194 46">
        <title id="logo-title-aria-id">{props.title}</title>
        <desc>{props.desc}</desc>
        <LogoPath />
        <BrandPath />
      </svg>
    </a>
  );
};

export const Logo = withFocusStyle(LogoBase);