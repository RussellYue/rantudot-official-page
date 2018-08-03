import "./Section3.less";
import { section3 } from "en/home";
import { Row, Col, Button } from "antd";
import Icon from "components/Icon";

const Section3 = () => {
  const className = "home-section3";
  return (
    <div className={className}>
      <div className={`${className}-container`}>
        <h1>{section3.title}</h1>
        <p>{section3.content}</p>
      </div>
    </div>
  );
};

export default Section3;
