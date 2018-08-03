import React from "react";
import "./styles/menu.less";
const Menu = ({ selectedKey, mode, children }) => {
  const list = React.Children.map(children, child =>
    React.cloneElement(child, {
      isSelected: child.key == selectedKey,
      selectedKey: child.key
    })
  );
  return <ul className="menu">{list}</ul>;
};

export default Menu;
