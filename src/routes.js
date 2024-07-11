import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import EmailTemplate from './components/EmailTemplate/EmailTemplate';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';


const MainRoutes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const theme = queryParams.get('theme') || 'light';
  const isHome = location.pathname === '/';

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar />
      {!isHome && <Sidebar />}
      {isHome ? (
        <div className="home">
          <Home />
        </div>
      ) : (
        <div className="main-content">
          <div className="content">
            <Routes location={location} key={location.pathname}>
              <Route path="/:templateId/:subId?" element={<EmailTemplate />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <MainRoutes />
  </Router>
);

export default App;
