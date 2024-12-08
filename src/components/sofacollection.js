import React, { useState, useEffect } from "react";
import image1 from "../assets/images/collection/sofa-collection-banner.jpg";
import image2 from "../assets/images/collection/table-banner.jpg";

const SofaCollection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const collections = [
    {
      id: 1,
      title: "Unlimited Sofa Collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "$199",
      image: image1,
    },
    {
      id: 2,
      title: "Unlimited Dining Table Collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "$299",
      image: image2,
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % collections.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [collections.length, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + collections.length) % collections.length
    );
  };

  return (
    <section id="sofa-collection" className="carousel-section">
      <div
        className="carousel"
        aria-live="polite"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className="carousel-btn prev"
          aria-label="Previous slide"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className="carousel-slides">
          {collections.map((collection, index) => (
            <article
              key={collection.id}
              className={`sofa-collection ${
                index === currentSlide ? "active" : "hidden"
              }`}
              style={{
                background: `url(${collection.image}) no-repeat center center/cover`,
                backgroundColor: "#f4f4f4", // Fallback color
              }}
              aria-hidden={index !== currentSlide}
            >
              <div className="container">
                <div className="sofa-collection-txt">
                  <h2>{collection.title}</h2>
                  <p>{collection.description}</p>
                  <div className="sofa-collection-price">
                    <h4>
                      Starting from <span>{collection.price}</span>
                    </h4>
                  </div>
                  <button
                    className="btn-cart welcome-add-cart sofa-collection-btn"
                    aria-label={`View more about ${collection.title}`}
                    onClick={() => (window.location.href = "#")}
                  >
                    View More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button
          className="carousel-btn next"
          aria-label="Next slide"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default SofaCollection;
