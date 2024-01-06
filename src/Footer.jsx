import React from "react";
import "./styles.css";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <p>&copy; Gizmo Rodriguo {currentYear}</p>
  );
}


export default Footer;

