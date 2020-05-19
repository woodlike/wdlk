/** @jsx jsx */
import { Box, Link } from '@wdlk/components';
import { jsx } from 'theme-ui';
import { useMenus } from 'docz';
import { Fragment } from 'react';

import { List, SideBar } from '../../../src/components';
import { Logo } from '../Logo';

export interface SidebarProps {
  readonly open: boolean;
  readonly onClick: React.MouseEventHandler<HTMLElement>;
}

export const Sidebar: React.FC = (): JSX.Element => {
  const menus = useMenus({});
  return (
    <SideBar>
      <Box padding={[2, 0, 4]} as="div">
        <Logo />
      </Box>

      {menus &&
        menus.map(menu => {
          if (Array.isArray(menu.menu)) {
            return (
              <Fragment key={menu.id}>
                <Link.Muted size="m" as="strong">
                  {menu.name}
                </Link.Muted>
                <Box padding={[2, 3, 4]} as="div">
                  <List.Unordered>
                    {menu.menu.map(m => (
                      <List.Item key={m.id}>
                        <Box padding={[0, 0, 2]} as="div">
                          <Link.Text href={m.route} size="s" as="a">
                            {m.name}
                          </Link.Text>
                        </Box>
                      </List.Item>
                    ))}
                  </List.Unordered>
                </Box>
              </Fragment>
            );
          }
          {
            return (
              menu.route &&
              !menu.filepath.includes('src/content') &&
              !menu.filepath.includes('README') && (
                <Box key={menu.id} padding={[0, 0, 4]} as="div">
                  <Link.Muted href={menu.route} size="m" as="a">
                    {menu.name}
                  </Link.Muted>
                </Box>
              )
            );
          }
        })}
    </SideBar>
  );
};

Sidebar.displayName = 'DoczSidebar';
