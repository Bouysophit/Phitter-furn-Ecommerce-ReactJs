import React, { useState, useEffect, useRef } from "react";
import "../assets/css/font-awesome.min.css";
import "../assets/css/linearicons.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootsnav.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import Imgslider1 from "../assets/images/slider/slider1.png";
import Imgslider2 from "../assets/images/slider/slider2.png";
import Imgslider3 from "../assets/images/slider/slider3.png";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const slides = [
    {
      img: Imgslider1,
      title: "cloth covered accent chair",
      price: "$ 399.00",
      oldPrice: "$ 499.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua.",
    },
    {
      img: Imgslider2,
      title: "mapple wood accent chair",
      price: "$ 199.00",
      oldPrice: "$ 299.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua.",
    },
    {
      img: Imgslider3,
      title: "valvet accent arm chair",
      price: "$ 299.00",
      oldPrice: "$ 399.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua.",
    },
  ];

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(slideInterval.current);
  }, [slides.length]);

  return (
    <header id="home" className="welcome-hero">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        {/* Carousel Indicators */}
        <ol className="carousel-indicators">
          {slides.map((_, index) => (
            <li
              key={index}
              data-target="#header-carousel"
              data-slide-to={index}
              className={currentSlide === index ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="small-circle"></span>
            </li>
          ))}
        </ol>

        {/* Carousel Inner */}
        <div className="carousel-inner" role="listbox">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                currentSlide === index ? "active" : ""
              }`}
              style={{ display: currentSlide === index ? "block" : "none" }}
            >
              <div className="single-slide-item slide1">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <div className="packages-price">
                              <p>
                                {slide.price} <del>{slide.oldPrice}</del>
                              </p>
                            </div>
                            <button
                              className="btn-cart welcome-add-cart"
                              onClick={() => (window.location.href = "#")}
                            >
                              <span className="lnr lnr-plus-circle"></span> add{" "}
                              <span>to</span> cart
                            </button>
                            <button
                              className="btn-cart welcome-add-cart welcome-more-info"
                              onClick={() => (window.location.href = "#")}
                            >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img src={slide.img} alt="slider image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <a
          className="carousel-control-prev"
          href="#header-carousel"
          role="button"
          data-slide="prev"
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            )
          }
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#header-carousel"
          role="button"
          data-slide="next"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Navbar Section */}
      <div className="top-area">
        <div className="header-area">
          <nav
            className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
            data-minus-value-desktop="70"
            data-minus-value-mobile="55"
            data-speed="1000"
          >
            {/* Top Search */}
            <div className="top-search">
              <div className="container">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="input-group-addon close-search">
                    <i className="fa fa-times"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="attr-nav">
                <ul>
                  <li className="search">
                    <a href="#">
                      <span className="lnr lnr-magnifier"></span>
                    </a>
                  </li>
                  <li className="nav-setting">
                    <a href="#">
                      <span className="lnr lnr-cog"></span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="lnr lnr-cart"></span>
                      <span className="badge badge-bg-1">2</span>
                    </a>
                    <ul className="dropdown-menu cart-list s-cate">
                      <li className="single-cart-list">
                        <a href="#" className="photo">
                          <img
                            src="assets/images/collection/arrivals1.png"
                            className="cart-thumb"
                            alt="image"
                          />
                        </a>
                        <div className="cart-list-txt">
                          <h6>
                            <a href="#">
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
                      {/* Repeat similar structure for other cart items */}
                      <li className="total">
                        <span>Total: $0.00</span>
                        <button
                          className="btn-cart pull-right"
                          onClick={() => (window.location.href = "#")}
                        >
                          view cart
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
                <a className="navbar-brand" href="index.html">
                  Phitter
                </a>
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
                    <a href="#home">Home</a>
                  </li>
                  <li className="scroll">
                    <a href="#new-arrivals">New arrival</a>
                  </li>
                  <li className="scroll">
                    <a href="#feature">Features</a>
                  </li>
                  <li className="scroll">
                    <a href="#blog">Blog</a>
                  </li>
                  <li className="scroll">
                    <a href="#newsletter">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
  