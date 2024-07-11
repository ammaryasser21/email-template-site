import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [theme, setTheme] = useState(queryParams.get('theme') || 'light');

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setActiveLink(path);
  }, [location]);


  const links = [
    { name: 'Gallery', path: '/gallery'},
    { name: 'Docs', path: '/'},
    { name: 'Template 1', path: '/template1' },
    { name: 'Template 2', path: '/template2' },
    { name: 'About', path: '/about'},
    
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    queryParams.set('theme', newTheme);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <nav className={`navbar ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
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
            className={`${
              activeLink === link.path.split('/')[1] ? 'active' : ''
            }`}
          >
            <Link to={`${link.path}?theme=${theme}`} onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
        <li className="github-icon">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle-button">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
