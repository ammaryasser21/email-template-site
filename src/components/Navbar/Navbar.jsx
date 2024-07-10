import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setActiveLink(path);
  }, [location]);

  const links = [
    { name: 'Docs', path: '/', className: '' },
    { name: 'Template 1', path: '/template1' },
    { name: 'Template 2', path: '/template2' },
    { name: 'About', path: '/about', className: '' },
    { name: 'Contact', path: '/contact', className: '' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>
          <Link to="/">Email Templates</Link>
        </h1>
      </div>
      <div className="icon-burger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'show-links' : ''}`}>
        {links.map((link) => (
          <li
            key={link.path}
            className={`${link.className} ${
              activeLink === link.path.split('/')[1] ? 'active' : ''
            }`}
          >
            <Link to={link.path} onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
        <li className="github-icon">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
