import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";

const Links = () => {
let loc = useLocation()

  return (
    <>
    <AnimatePresence>
      <Routes location={loc}  key={loc.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      </AnimatePresence>
    </>
  );
};

export default Links;
