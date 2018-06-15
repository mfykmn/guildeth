import React, { Fragment} from "react";
import ReactDOM from "react-dom";

import Heaser from './js/components/header'
import Body from './js/components/body'
import Quests from './js/components/quests'

import './css/index.css';

const Root = () => {
  return (
    <Fragment>
      <Heaser />
      <Body />
      <Quests />
    </Fragment>
  );

};
const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
