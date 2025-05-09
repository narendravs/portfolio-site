import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Narendra Portfolio</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
            Designed by <a href="#">NTechStack</a> Distributed by{" "}
            <a href="#">NTechStack</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
