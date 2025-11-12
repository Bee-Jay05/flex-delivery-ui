import React from 'react';

export default function Header(){
  return (
    <header className="header">
      <div className="header-left">
        <button className="back-btn"></button>
        <h1 className="title">Temp</h1>
      </div>
      <div className="header-right">
        <div className="icons"></div>
      </div>
    </header>
  );
}
