import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
          © {new Date().getFullYear()}, Built with love by 
          {` `}
          <a href="mailto:andrew4ld@gmail.com" className="footLink">Andrew Arias</a>
      </footer>
    );
};

export default Footer