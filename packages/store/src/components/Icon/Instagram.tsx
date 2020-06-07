/**@jsx jsx */
import { jsx } from 'theme-ui';

import { IconProps, createIconSizeStyles, createStyles } from '.';

export const Instagram: React.FC<IconProps> = props => (
  <svg
    sx={createStyles(props.color, createIconSizeStyles(props.size))}
    viewBox="0 0 20 20"
    id="instagram">
    <title>Woodlike Instagram Icon</title>
    <path d="M15,18.16H5A3.14,3.14,0,0,1,1.85,15V8.54h4a4.69,4.69,0,0,0-.45,2,4.75,4.75,0,0,0,9.5,0,4.68,4.68,0,0,0-.45-2h3.75V15A3.14,3.14,0,0,1,15,18.16m-2.93-7.61a2,2,0,1,1-2-2,2,2,0,0,1,2,2M5,1.84H15A3.14,3.14,0,0,1,18.15,5V6.69h-5.3a4.75,4.75,0,0,0-5.49,0H1.85V5A3.14,3.14,0,0,1,5,1.84M5,0A5,5,0,0,0,0,5V15a5,5,0,0,0,5,5H15a5,5,0,0,0,5-5V5a5,5,0,0,0-5-5H5Z" />
  </svg>
);

Instagram.displayName = 'InstagramIconPath';
