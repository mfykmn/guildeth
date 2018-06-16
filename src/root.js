import React, { Fragment} from "react";
import ReactDOM from "react-dom";

import Heaser from './js/components/header'
import Body from './js/components/body'
import Quests from './js/components/quests'

import './css/index.css';

const questListData = [
  { id: 0, title: "〇〇1をしてほしい", text: "〇〇の〇〇が発生しています。対処してください。", deadline: "2018-01-01T00:00:00+09:00", amount: 0.54},
  { id: 1, title: "〇〇2をしてほしい", text: "〇〇の〇〇が発生しています。対処してください。", deadline: "2018-05-01T00:00:00+09:00", amount: 1},
  { id: 2, title: "〇〇3をしてほしい", text: "〇〇の〇〇が発生しています。対処してください。", deadline: "2018-04-01T00:00:00+09:00", amount: 0.02},
  { id: 3, title: "〇〇4をしてほしい", text: "〇〇の〇〇が発生しています。対処してください。", deadline: "2018-03-01T00:00:00+09:00", amount: 0.9},
];

const Root = () => {
  return (
    <Fragment>
      <Heaser />
      <Body />
      <Quests data={questListData}/>
    </Fragment>
  );

};
const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
