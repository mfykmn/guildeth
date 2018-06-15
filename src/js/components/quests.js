import React, {Fragment}  from "react";

import "../../css/quests.css";

const Quest = () => {
  return (
    <div className="quest">
      <h3>〇〇をしてほしい</h3>
      <p>対応期限: 2018-01-01T00:00:00+09:00</p>
      <p>報酬　　: 0.54eth</p>
    </div>
  );
};

const Quests = () => {
    return (
        <Fragment>
          <h3 className="section-title">クエスト一覧</h3>
          <Quest/>
          <Quest/>
          <Quest/>
        </Fragment>
    );
};

export default Quests;
