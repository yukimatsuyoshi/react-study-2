import { Fragment, StrictMode } from "react";

// JSX記法：jsの中でhtmlのタグを書いていく
// returnするものは一つのタグである必要がある --> Fragmentを使うと余計にdivで囲う必要なし（「Fragment」を省略出来る: <> </>でおけ）
// タグで{}で囲うとその中はjsとして認識される
// {{}}の外側はjsを書く宣言で、内側はjsのオブジェクトを表す
//    cssを当てる場合は、文字列にしないと怒られる（jsにはそんなプロパティねーよ）
//        -でつなぐプロパティもキャメルケースに直す
//    タグに直接書くよりは、変数にしたほうが可読性が良い
const App = () => {
  const onClickButton = () => {
    alert("test");
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Test</h1>
      <p style={contentStyle}>testest</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
