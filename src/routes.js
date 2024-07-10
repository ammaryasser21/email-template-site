import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import EmailTemplate from "./components/EmailTemplate/EmailTemplate";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-50vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "50vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const sidebarVariants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
  },
};

const homeVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/:templateId/:subId?"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <EmailTemplate />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route path="*" element={<Home/>} />
      </Routes>
    </AnimatePresence>
  );
};

const MainRoutes = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      <Navbar />
      <AnimatePresence>
        {!isHome && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            transition={pageTransition}
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isHome ? (
          <motion.div
            className="home"
            initial="initial"
            animate="in"
            exit="out"
            variants={homeVariants}
            transition={pageTransition}
          >
            <Home />
          </motion.div>
        ) : (
          <div className="main-content">
            <div className="content">
              <AnimatedRoutes />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => (
  <Router>
    <MainRoutes />
  </Router>
);

export default App;
