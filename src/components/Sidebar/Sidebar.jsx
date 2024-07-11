import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [openSubMenu, setOpenSubMenu] = useState({});
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setActiveLink(path);
  }, [location]);

  const toggleSubMenu = (path) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [path]: !prevState[path],
    }));
  };

  const renderSubLinks = (template, subLinks) => (
    <ul className={openSubMenu[template] ? 'open' : ''}>
      {subLinks.map((subLink) => (
        <li key={subLink.path} className={location.pathname === subLink.path ? 'active' : ''}>
          <Link to={subLink.path}>{subLink.name}</Link>
        </li>
      ))}
    </ul>
  );

  const links = [
    {
      name: 'Quickstart',
      path: '/quickstart',
      subLinks: [
        { name: 'Set up', path: '/quickstart/setup' },
        { name: 'Import data', path: '/quickstart/import-data' },
        { name: 'Layout', path: '/quickstart/layout' },
        { name: 'Style data', path: '/quickstart/style-data' },
        { name: 'Add tooltips', path: '/quickstart/add-tooltips' },
      ],
    },
    {
      name: 'Resources',
      path: '/resources',
      subLinks: [
        { name: 'Resource 1', path: '/resources/resource1' },
        { name: 'Resource 2', path: '/resources/resource2' },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      <ul>
        {links.map((link) => (
          <li key={link.path} className={activeLink === link.path.split('/')[1] ? 'active' : ''}>
            <button onClick={() => toggleSubMenu(link.path)}>
              <FontAwesomeIcon
                icon={openSubMenu[link.path] ? faChevronDown : faChevronRight}
                className={`icon ${openSubMenu[link.path] ? 'open' : ''}`}
              />
              {link.name}
            </button>
            {renderSubLinks(link.path, link.subLinks)}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
