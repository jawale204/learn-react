import React from "react";
import { Link } from "react-router-dom";

function AboutLink() {
  return (
    <div className="about-link">
      <Link to="/about">About</Link>
    </div>
  );
}

export default AboutLink;
