import { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

import "./layout.less";

class Layout extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

Layout.defaultProps = {
  className: "layout"
};

export default Layout;
