import React, {Fragment} from 'react';

import '../../css/header.css';

const Header = () => {
  return (
    <Fragment>
      <header>
        <div class="top">Guildeth</div>
        <div class="btn">クエスト発行</div>
        <div class="btn">マイページ</div>
      </header>
    </Fragment>
  );
};

export default Header;
