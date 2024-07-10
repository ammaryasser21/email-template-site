import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setActiveLink(path);
  }, [location]);

  const renderSubLinks = (template, subLinks) => (
    <ul>
      {subLinks.map((subLink) => (
        <li key={subLink.path} className={location.pathname === subLink.path ? 'active' : ''}>
          <Link to={subLink.path}>{subLink.name}</Link>
        </li>
      ))}
    </ul>
  );

  const links = [
    {
      name: 'Template 1',
      path: '/template1',
      subLinks: [
        { name: 'Sub Link 1', path: '/template1/sub1' },
        { name: 'Sub Link 2', path: '/template1/sub2' },
      ],
    },
    {
      name: 'Template 2',
      path: '/template2',
      subLinks: [
        { name: 'Sub Link 1', path: '/template2/sub1' },
        { name: 'Sub Link 2', path: '/template2/sub2' },
      ],
    },
  ];

  return (
    <aside className={`sidebar`}>
      <ul>
        {links.map((link) => (
          <li key={link.path} className={activeLink === link.path.split('/')[1] ? 'active' : ''}>
            <Link to={link.path}>{link.name}</Link>
            {renderSubLinks(link.path, link.subLinks)}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
