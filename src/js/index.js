import React, { Fragment} from "react";
import ReactDOM from "react-dom";

import Heaser from './components/header'
import Body from './components/body'
import Quests from './components/quests'

import '../css/index.css';

const Index = () => {
  return (
    <Fragment>
      <Heaser />
      <Body />
      <Quests />
    </Fragment>
  );

};
const rootElement = document.getElementById("index");
ReactDOM.render(<Index />, rootElement);
