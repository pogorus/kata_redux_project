import React from 'react';

import './app-header.scss';
import logo from './logo.svg';

function AppHeader() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
}
export default AppHeader;
