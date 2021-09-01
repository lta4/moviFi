import React from "react";

const Footer = () => {
    return (
        // <div>
        //     <h2 className="footerBar"><a href=".navBar" id="footLink">MoviFi</a></h2>
        //     <p className="copyRight">Andrew Arias 2021</p>
        // </div>
        <footer className="footer">
          © {new Date().getFullYear()}, Built with love by 
          {` `}
          <a href="mailto:andrew4ld@gmail.com" className="footLink">Andrew Arias</a>
      </footer>
    );
};

export default Footer