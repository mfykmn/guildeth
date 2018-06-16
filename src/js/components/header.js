import React, {Fragment} from 'react';

import '../../css/header.css';

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="top">Guildeth</div>
        <div className="btn">クエスト発行</div>
        <div className="btn">マイページ</div>
      </header>
    </Fragment>
  );
};

export default Header;
