/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Layout, Link } from '@wdlk/components';
import { useMenus } from 'docz';
// import { Link } from 'gatsby';

import { Logo } from '../Logo';

export interface SidebarProps {
  readonly open: boolean;
  readonly onClick: React.MouseEventHandler<HTMLElement>;
}

export const Sidebar: React.FC = (): JSX.Element => {
  const menus = useMenus({});
  console.log(menus, '000000-------');
  return (
    <Layout.SideBar tag="aside" position="left">
      <Box my={[4, 7]} as="div">
        <Logo />
      </Box>

      {menus &&
        menus.map(menu => {
          if (Array.isArray(menu.menu)) {
            return (
              <Box key={menu.id} my={[0, 7]} as="div">
                <Link.Highlight size="m" as="strong">
                  {menu.name}
                </Link.Highlight>
                <Box px={[0, 3]} my={[2, 0]} as="ul">
                  {menu.menu.map(m => (
                    <Box key={m.id} my={[0, 2]} as="li">
                      <Link.Text href={m.route} size="s" as="a">
                        {m.name}
                      </Link.Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          }
          {
            return (
              menu.route && (
                <Box key={menu.id} my={[0, 4]} as="div">
                  <Link.Highlight href={menu.route} size="m" as="a">
                    {menu.name}
                  </Link.Highlight>
                </Box>
              )
            );
          }
        })}
    </Layout.SideBar>
  );
};

Sidebar.displayName = 'DoczSidebar';
