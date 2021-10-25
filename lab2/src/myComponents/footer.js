import React from "react";

function Footer({ name, link }) {
  return (
    <div className="myfotter">
      <footer>
        <p style={{ color: "black" }}>
          {name}

          <a href={link} style={{ paddingLeft: 5 }}>
            About
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
