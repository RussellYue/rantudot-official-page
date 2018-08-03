import "./Section2.less";
import { section2 } from "en/home";
import { Row, Col, Button } from "antd";
import Icon from "components/Icon";

const Section2 = () => {
  const className = "home-section2";
  const colConfig = {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    },
    md: {
      span: 12
    },
    lg: {
      span: 8
    }
  };

  const cols = section2.features.map((item, index) => {
    const propsToIcon = {
      isAnt: item.icon.isAnt,
      type: item.icon.type,
      style: {
        color: "#1890ff",
        fontSize: "70px",
        textAlign: "center"
      }
    };
    const flag = index % 2 == 0;
    const subColConfigLeft = {
      xs: {
        span: 6,
        order: flag ? 2 : 1
      },
      sm: {
        span: 6,
        order: flag ? 2 : 1
      },
      md: {
        span: 24,
        order: 1
      },
      lg: {
        span: 24
      }
    };
    const subColConfigRight = {
      xs: {
        span: 18,
        order: flag ? 1 : 2
      },
      sm: {
        span: 18,
        order: flag ? 1 : 2
      },
      md: {
        span: 24,
        order: 2
      },
      lg: {
        span: 24
      }
    };
    return (
      <Col className={`${className}-feature`} {...colConfig}>
        <Row type="flex" gutter={24}>
          <Col {...subColConfigLeft}>
            <Icon {...propsToIcon} />
          </Col>
          <Col {...subColConfigRight}>
            <h2>{item.title}</h2>
            {item.content}
          </Col>
        </Row>
      </Col>
    );
  });
  return (
    <div className={className}>
      <div className={`${className}-container`}>
        <h1>{section2.title}</h1>
        <Row>{cols}</Row>
      </div>
    </div>
  );
};

export default Section2;
