import React from "react";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

function Coureses() {
  return (
    <>
      <Navbar />
      <div className="mt-32">
        <Courses />
      </div>

      <Footer />
    </>
  );
}

export default Coureses;
