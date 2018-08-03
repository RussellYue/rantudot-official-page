import "./Section1.less";
import { section1 } from "en/home";
import { Row, Col, Button } from "antd";

const Section1 = () => {
  const className = "home-section1";
  const colConfig = {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    },
    md: {
      span: 24
    },
    lg: {
      span: 12
    }
  };
  return (
    <div className={className}>
      <Row>
        <Col {...colConfig} className={`${className}-left`}>
          <h1>{section1.title}</h1>
          <p>{section1.content}</p>
          <Button> Contact US</Button>
        </Col>
        <Col {...colConfig} className={`${className}-right`}>
          <img src="/static/doubleMockup.png" alt="doubleMockup.png" />
        </Col>
      </Row>
    </div>
  );
};

export default Section1;
