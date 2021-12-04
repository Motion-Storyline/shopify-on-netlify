import React from 'react';

export default function Header() {
  return (
    <header className="app-header">
      <p>Simple Product</p>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <a href="/">Home</a>
          </li>
          <li className="main-nav-item">
            <a href="../../all">All Templates</a>
          </li>
          <li className="main-nav-item">
            <a href="../../cart">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
