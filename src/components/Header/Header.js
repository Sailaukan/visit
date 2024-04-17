import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink 
          to="/" 
          exact 
          className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
        >
          Home
        </NavLink>
        <NavLink 
          to="/resume"
          className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
        >
          Resume
        </NavLink>
        <NavLink 
          to="/blog"
          className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
        >
          Blog
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
