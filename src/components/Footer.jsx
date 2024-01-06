import React from "react";


function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Gizmo Rodriguo {currentYear}</p>
    </footer>
    );
}


export default Footer;

