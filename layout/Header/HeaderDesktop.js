import { Menu, Icon } from "antd";
import Link from "next/link";
import Router from "next/router";

import Logo from "./Logo";
import { header } from "data/en";
import "./HeaderDesktop.less";

const HeaderDesktop = ({ router }) => {
  const className = "header-desktop";
  const navList = header.navList.map(navItem => (
    <Menu.Item key={navItem.key}>
      <Link href={navItem.key}>
        <a>{navItem.name}</a>
      </Link>
    </Menu.Item>
  ));

  return (
    <div className={className}>
      <div className={`${className}-container`}>
        <Logo
          onClick={() => {
            Router.push("/");
          }}
        />
        <Menu mode="horizontal" selectedKeys={[router.pathname]}>
          {navList}
        </Menu>
      </div>
    </div>
  );
};

export default HeaderDesktop;
