import React from 'react';

export default function Header() {
  return (
    <header className="app-header">
      <p href="/">Welcome message</p>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <a href="/">Home</a>
          </li>
          <li className="main-nav-item">
            <a href="/">Catalog</a>
          </li>
          <li className="main-nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
