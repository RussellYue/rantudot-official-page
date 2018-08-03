import { Icon as AntIcon } from "antd";

const Icon = ({ isAnt, type, style }) => {
  // const styleToPass = object.assign(style, {
  //   display: "inline-block",
  //   fontStyle: "normal",
  //   verticalAlign: "baseline",
  //   minWidth: "14px",
  //   marginRight: "10px",
  //   textAlign: "center",
  //   lineHeight: 1
  // });
  return isAnt ? (
    <AntIcon type={type} style={style} />
  ) : (
    <i className={`iconfont ${type}`} style={style} />
  );
};

export default Icon;
