import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Coureses from "./coureses/Coureses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./pages/Contact";
import About from  "./pages/About"

function App() {
  return (
    <div className=" dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coureses" element={<Coureses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
