/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Layout } from '@wdlk/components';
import { useMenus } from 'docz';
import { Link } from 'gatsby';

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
      <div>
        <Logo />
      </div>
      {menus &&
        menus.map(menu => {
          if (Array.isArray(menu.menu)) {
            return (
              <div key={menu.id}>
                <div>{menu.name}</div>
                {menu.menu.map(m => (
                  <Link key={m.id} to={m.route}>
                    {m.name}
                  </Link>
                ))}
              </div>
            );
          }
          return (
            <Link key={menu.id} to={menu.route}>
              {menu.name}
            </Link>
          );
        })}
    </Layout.SideBar>
  );
};

Sidebar.displayName = 'DoczSidebar';
