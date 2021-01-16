import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderArea } from './styled';
import logo from './images/logo.png';

export default () => {
  return (
      <HeaderArea>
        <div className="container">
          <div className="logo">
            <Link to="/personal-website/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </HeaderArea>
  );
};
