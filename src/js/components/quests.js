import React, {Fragment}  from "react";

import "../../css/quests.css";

const Quest = (props) => {
  return (
    <div className="quest">
      <h3>{props.title}</h3>
      <p>内容　　 : {props.text}</p>
      <p>対応期限 : {props.deadline}</p>
      <p>報酬　　 : {props.amount}eth</p>
    </div>
  );
};

const Quests = (props) => {
  const listQuests = props.data.map((data) => {
    return (
      <Quest
        key={data.id}
        title={data.title}
        text={data.text}
        deadline={data.deadline}
        amount={data.amount}
      />
    );
  });

  return (
      <Fragment>
        <h3 className="section-title">クエスト一覧</h3>
        {listQuests}
      </Fragment>
  );
};

export default Quests;
