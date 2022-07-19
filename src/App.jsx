/** eslint react-hooks/exhaustive-deps: off */
import { useState, useEffect } from "react";
import ColofullMessage from "./components/ColorfulMessage";
// import { ColofullMessage } from "./components/ColorfulMessage";  // 通常のexportの場合は分割代入が必要

// JSX記法：jsの中でhtmlのタグを書いていく
// returnするものは一つのタグである必要がある --> Fragmentを使うと余計にdivで囲う必要なし（「Fragment」を省略出来る: <> </>でおけ）
// タグで{}で囲うとその中はjsとして認識される
// {{}}の外側はjsを書く宣言で、内側はjsのオブジェクトを表す
//    cssを当てる場合は、文字列にしないと怒られる（jsにはそんなプロパティねーよ）
//        -でつなぐプロパティもキャメルケースに直す
//    タグに直接書くよりは、変数にしたほうが可読性が良い
//
// Props: コンポーネントに渡す引数のようなもの
// state: 各コンポーネントが持つ状態。Stateが変更されると再レンダリングされる
//   コンポーネント内で動的に変わる変数はuseStateで定義する
// 再レンダリングの条件： states, propsの中身が変わった場合、親コンポーネントが変わった場合
//   その度に上から読み込んでいくので、気をつけないと無限ループになる
// useEffect: statesの関心を分離させる
//   第二引数に空の配列を渡すと、最初の一回のレンダリング時だけ通したいような処理を実行できる（stateが変わるたびに走らないようにできる。例えばデータの取得とか）
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); // 一つ目にstateの変数名、２つ目にstateを更新する関数
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        //setFaceShowFlag(true);   //無限ループになってしまう
        faceShowFlag || setFaceShowFlag(true); //  || 左オペランドがfalseの場合は右オペランドが走る
      } else {
        faceShowFlag && setFaceShowFlag(false); //  && 左オペランドがtrueの場合は右オペランドが走る
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]); //第二引数にnumを渡すと、numにだけ関心を持つようになる（numが変化した時だけ処理が走る）

  // ↑ useEffectを用いて書き換え
  // if (num > 0) {
  //   if (num % 3 === 0) {
  //     //setFaceShowFlag(true);   //無限ループになってしまう
  //     faceShowFlag || setFaceShowFlag(true); //  || 左オペランドがfalseの場合は右オペランドが走る
  //   } else {
  //     faceShowFlag && setFaceShowFlag(false); //  && 左オペランドがtrueの場合は右オペランドが走る
  //   }
  // }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColofullMessage color="blue">お元気ですか?</ColofullMessage>
      <ColofullMessage color="pink">元気です</ColofullMessage>
      <ColofullMessage color="pink" message="元気です" />
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>😃</p>}
    </>
  );
};

export default App;
