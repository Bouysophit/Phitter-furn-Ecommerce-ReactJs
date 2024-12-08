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

import Pupulerpro1 from "../assets/images/populer-products/p1.png";
import Pupulerpro2 from "../assets/images/populer-products/p2.png";
import Pupulerpro3 from "../assets/images/populer-products/p3.png";

function PopulerProducts() {
  const products = [
    {
      id: 1,
      img: Pupulerpro1,
      title: "Arm Chair",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit asperna aut odit aut fugit.",
      link: "/products/arm-chair",
    },
    {
      id: 2,
      img: Pupulerpro2,
      title: "Latest Designed Stool and Chair",
      description:
        "Edi ut perspiciatis unde omnis iste natusina error sit voluptatem accusantium doloret mque laudantium, totam rem aperiam.",
      price: "$99.00",
      link: "/products/stool-chair",
    },
    {
      id: 3,
      img: Pupulerpro3,
      title: "Hanging Lamp",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit asperna aut odit aut fugit.",
      link: "/products/hanging-lamp",
    },
  ];

  return (
    <section id="populer-products" className="populer-products">
      <div className="container">
        <div className="populer-products-content">
          <div className="row">
            {products.map((product, index) => (
              <article
                key={product.id}
                className={`col-md-${
                  index === 1 ? "6" : "3"
                } single-populer-products`}
              >
                <div className="single-populer-product-img mt40">
                  <img src={product.img} alt={`${product.title} image`} />
                </div>
                <h2>
                  <Link to={product.link}>{product.title}</Link>
                </h2>
                <div className="single-populer-products-para">
                  <p>{product.description}</p>
                  {product.price && (
                    <div className="populer-products-price">
                      <h4>
                        Sales Start from <span>{product.price}</span>
                      </h4>
                    </div>
                  )}
                </div>
                {index === 1 && (
                  <button
                    className="btn-cart welcome-add-cart populer-products-btn"
                    onClick={() => (window.location.href = "#")}
                  >
                    Discover More
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopulerProducts;
