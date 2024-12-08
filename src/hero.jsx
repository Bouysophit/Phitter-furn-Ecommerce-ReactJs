import React, { useState, useEffect, useRef } from "react";
import "./assets/css/font-awesome.min.css";
import "./assets/css/linearicons.css";
import "./assets/css/animate.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootsnav.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Imgslider1 from "./assets/images/slider/slider1.png";
import Imgslider2 from "./assets/images/slider/slider2.png";
import Imgslider3 from "./assets/images/slider/slider3.png";

const Hero = () => {
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
    </header>
  );
};

export default Hero;