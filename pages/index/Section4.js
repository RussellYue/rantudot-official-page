import "./Section4.less";
import { section4 } from "en/home";
import { Row, Col, Button } from "antd";
import Icon from "components/Icon";

const Section4 = () => {
  const className = "home-section4";
  return (
    <div className={className}>
      <div className={`${className}-container`}>
        <h1>{section4.title}</h1>
        <Button>JOIN US</Button>
      </div>
    </div>
  );
};

export default Section4;
