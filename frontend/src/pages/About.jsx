import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="">
      <div className="z-50">
        <Navbar />
      </div>
      <h1 className="text-4xl text-center my-80">About Us</h1>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
