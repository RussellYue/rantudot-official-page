import { Icon as AntIcon } from "antd";
import { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import QueueAnim from "rc-queue-anim";

import Logo from "./Logo";
import Icon from "components/Icon";
import Menu, { Item } from "components/Menu";
import { header } from "en";
import "./HeaderMobile.less";

class HeaderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
  }

  clickToggle = () => {
    let { isNavOpen } = this.state;
    this.setState({
      isNavOpen: !isNavOpen
    });
  };

  // route to other page
  // reason not use next/link is need to set isNavOpen: false
  routeToPath = pathname => {
    this.setState({
      isNavOpen: false
    });
    Router.push(pathname);
  };

  backHome = () => {
    this.routeToPath("/");
  };

  render() {
    const { isNavOpen } = this.state;
    const { className, router } = this.props;
    const navList = header.navList.map(navItem => (
      <Item key={navItem.key} onClick={this.routeToPath}>
        {navItem.name}
      </Item>
    ));
    const propsToMenuAnimation = {
      animConfig: {
        opacity: [1, 0]
      },
      duration: 200
    };
    const propsToLogo = {
      onClick: this.backHome,
      size: {
        icon: "35px",
        title: "15px"
      }
    };
    const menu = (
      <QueueAnim {...propsToMenuAnimation}>
        {isNavOpen
          ? [
              <div key="menu" className={`${className}-menu`}>
                <Logo {...propsToLogo} />
                <div
                  onClick={this.clickToggle}
                  className={`${className}-toggle`}
                >
                  <AntIcon type="close" style={{ color: "white" }} />
                </div>
                <div className={`${className}-menu-navList`}>
                  <Menu selectedKey={router.pathname}>{navList}</Menu>
                </div>
              </div>
            ]
          : null}
      </QueueAnim>
    );
    const propsToIcon = {
      type: "icon-Group",
      style: {
        color: "white"
      }
    };
    return (
      <div className={className}>
        <div className={`${className}-container`}>
          {isNavOpen ? null : <Logo {...propsToLogo} />}
          <div onClick={this.clickToggle} className={`${className}-toggle`}>
            {isNavOpen ? null : <Icon {...propsToIcon} />}
          </div>
        </div>
        {menu}
      </div>
    );
  }
}

HeaderMobile.defaultProps = {
  className: "header-mobile"
};

export default HeaderMobile;
