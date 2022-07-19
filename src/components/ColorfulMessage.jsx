import { Fragment, StrictMode } from "react";

const colorfullMessage = (props) => {
  const { color, children } = props; // 分割代入
  const contentStyle = {
    // color: color,
    color, // :の前後が同じであれば省略可能
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>; // componentsのタグで囲った中身はchildrenに入ってくる
  // return <p style={contentStyle}>{props.message}</p>;
};

export default colorfullMessage;
