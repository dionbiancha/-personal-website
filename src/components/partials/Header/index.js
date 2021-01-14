import React from 'react';

import logo from '../../../image/logo.png';

export default () => {
  return (
    <div className="container">
      <header>
        <nav>
          <a>
            <img src={logo} alt="logo" />
          </a>
        </nav>
      </header>
    </div>
  );
};
