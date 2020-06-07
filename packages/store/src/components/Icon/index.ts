export * from './icon';

import * as FacebookIcon from './Facebook';
import * as InstagramIcon from './Instagram';
import * as OnePercentIcon from './OnePercent';

export const Icon = { ...FacebookIcon, ...InstagramIcon, ...OnePercentIcon };
