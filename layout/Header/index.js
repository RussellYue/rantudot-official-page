import { Fragment } from "react";
import { Menu, Icon } from "antd";
import Link from "next/link";
import { withRouter } from "next/router";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = ({ router }) => {
  return (
    <Fragment>
      <HeaderDesktop router={router} />
      <HeaderMobile router={router} />
    </Fragment>
  );
};

export default withRouter(Header);
