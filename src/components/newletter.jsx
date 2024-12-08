import React from "react";
import "../assets/css/font-awesome.min.css";
import "../assets/css/linearicons.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootsnav.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const LetterFooter = () => {
  const footerLinks = {
    information: ["about us", "contact us", "news", "store"],
    collections: [
      "wooden chair",
      "royal cloth sofa",
      "accent chair",
      "bed",
      "hanging lamp",
    ],
    myAccounts: [
      "my account",
      "wishlist",
      "community",
      "order history",
      "my cart",
    ],
  };

  const socialLinks = [
    { platform: "Facebook", icon: "fa-facebook", href: "#" },
    { platform: "Instagram", icon: "fa-instagram", href: "#" },
    { platform: "LinkedIn", icon: "fa-linkedin", href: "#" },
    { platform: "Pinterest", icon: "fa-pinterest", href: "#" },
    { platform: "Behance", icon: "fa-behance", href: "#" },
  ];

  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <div className="hm-footer-details">
          <div className="row">
            {Object.entries(footerLinks).map(([section, links], idx) => (
              <div className="col-md-3 col-sm-6 col-xs-12" key={idx}>
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>{section.replace(/([A-Z])/g, " $1").toLowerCase()}</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      {links.map((link, index) => (
                        <li key={index}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Newsletter Section */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="hm-footer-widget">
                <div className="hm-foot-title">
                  <h4>newsletter</h4>
                </div>
                <div className="hm-foot-para">
                  <p>Subscribe to get latest news, update and information.</p>
                </div>
                <div className="hm-foot-email">
                  <div className="foot-email-box">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email..."
                      aria-label="Enter your email"
                    />
                  </div>
                  <div className="foot-email-subscribe">
                    <button className="subscribe-button" aria-label="Subscribe">
                      <i className="fa fa-location-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={`Visit us on ${social.platform}`}
                >
                  <i className={`fa ${social.icon}`}></i>
                </a>
              ))}
            </div>
            <p>
              &copy; {new Date().getFullYear()} Copyright. Designed and
              developed by
              <a href="https://www.themesine.com/"> themesine And Buoysaphit</a>
            </p>
          </div>
        </div>

        {/* Scroll to Top */}
        <div id="scroll-Top">
          <div className="return-to-top">
            <button
              id="scroll-top"
              className="scroll-top-button"
              aria-label="Back to Top"
            >
              <i
                className="fa fa-angle-up"
                data-toggle="tooltip"
                data-placement="top"
                title="Back to Top"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default LetterFooter;
