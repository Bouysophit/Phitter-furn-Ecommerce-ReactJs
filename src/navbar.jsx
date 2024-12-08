import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/font-awesome.min.css";
import "./assets/css/linearicons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootsnav.css";
import "./assets/css/style.css";

const Navbar = () => {
  return (
    <div className="top-area">
      <div className="header-area">
        <nav
          className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
          data-minus-value-desktop="70"
          data-minus-value-mobile="55"
          data-speed="1000"
        >
          <div className="container">
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className="lnr lnr-magnifier"></span>
                  </a>
                </li>
                <li className="nav-setting">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className="lnr lnr-cog"></span>
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="lnr lnr-cart"></span>
                    <span className="badge badge-bg-1">2</span>
                  </a>
                  <ul className="dropdown-menu cart-list s-cate">
                    <li className="single-cart-list">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="photo"
                      >
                        <img
                          src="assets/images/collection/arrivals1.png"
                          className="cart-thumb"
                          alt="Product Thumbnail"
                        />
                      </a>
                      <div className="cart-list-txt">
                        <h6>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            arm <br /> chair
                          </a>
                        </h6>
                        <p>
                          1 x - <span className="price">$180.00</span>
                        </p>
                      </div>
                      <div className="cart-close">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </li>
                    <li className="total">
                      <span>Total: $0.00</span>
                      <button
                        className="btn-cart pull-right"
                        onClick={() => (window.location.href = "/cart")}
                      >
                        View Cart
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" to="/">
                Phitter
              </Link>
            </div>

            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-center"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="scroll active">
                  <Link to="/">Home</Link>
                </li>
                <li className="scroll">
                  <Link to="/productfakeapi">Products</Link>
                </li>
                <li className="scroll">
                  <Link to="/features">Features</Link>
                </li>
                <li className="scroll">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
