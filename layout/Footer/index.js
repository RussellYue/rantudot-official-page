import { Icon } from "antd";

import { footer } from "en";
import "./Footer.less";

const Footer = () => {
  const className = "layout-footer";
  const copyright = (
    <div>
      Copyright <Icon type="copyright" /> {`2018 ${footer.copyright}`}
    </div>
  );
  return <div className={className}>{copyright}</div>;
};

export default Footer;
