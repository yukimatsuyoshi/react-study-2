import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client"; // htmlにコンポーネントを反映するためのライブラリ

import App from "./App"; // 拡張子は.jsxがおすすめ

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

// 昔の書き方
// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
