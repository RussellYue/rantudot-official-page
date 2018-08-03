import "./Logo.less";
import Router from "next/router";
import Icon from "../../components/Icon";

const Logo = ({ onClick, size }) => {
  const className = "header-logo";
  let iconSize = "50px";
  let titleSize = "30px";
  if (size !== undefined) {
    iconSize = size.icon;
    titleSize = size.title;
  }
  const propsToIcon = {
    type: "icon-songguo",
    isAnt: false,
    style: {
      fontSize: iconSize,
      color: "white",
      float: "left"
    }
  };
  return (
    <div
      className={className}
      style={{ padding: "0px 20px" }}
      onClick={onClick}
    >
      <Icon {...propsToIcon} />
      <div className="company-name" style={{ fontSize: titleSize }}>
        <b>Rantudot</b>
      </div>
    </div>
  );
};

export default Logo;
