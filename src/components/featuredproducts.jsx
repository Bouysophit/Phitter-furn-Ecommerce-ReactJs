import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/font-awesome.min.css";
import "../assets/css/linearicons.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootsnav.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import FeatureP1 from "../assets/images/features/f1.jpg";
import FeatureP2 from "../assets/images/features/f2.jpg";
import FeatureP3 from "../assets/images/features/f3.jpg";
import FeatureP4 from "../assets/images/features/f4.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: FeatureP1,
      name: "Designed Sofa",
      price: 160.0,
      reviews: 45,
    },
    {
      id: 2,
      image: FeatureP2,
      name: "Dining Table",
      price: 200.0,
      reviews: 45,
    },
    {
      id: 3,
      image: FeatureP3,
      name: "Chair and Table",
      price: 100.0,
      reviews: 45,
    },
    {
      id: 4,
      image: FeatureP4,
      name: "Modern Arm Chair",
      price: 299.0,
      reviews: 45,
    },
  ];

  const renderStars = (count) => {
    const fullStars = Math.min(count, 5);
    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <i key={i} className="fa fa-star"></i>
        ))}
        {fullStars < 5 && (
          <span className="spacial-feature-icon">
            <i className="fa fa-star"></i>
          </span>
        )}
      </>
    );
  };

  return (
    <section id="feature" className="feature">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
        </div>
        <div className="feature-content">
          <div className="row">
            {products.map((product) => (
              <article key={product.id} className="col-sm-3 single-feature">
                <div className="single-feature-img">
                  <img src={product.image} alt={`Image of ${product.name}`} />
                </div>
                <div className="single-feature-txt text-center">
                  <p>
                    {renderStars(5)}
                    <span className="feature-review">
                      ({product.reviews} reviews)
                    </span>
                  </p>
                  <h3>
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <h5>${product.price.toFixed(2)}</h5>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
