import React, { useEffect, useRef } from "react";

import "../assets/css/font-awesome.min.css";
import "../assets/css/linearicons.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootsnav.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import Adidas from "../assets/images/clients/c1.png";
import Kappa from "../assets/images/clients/c2.png";
import Levis from "../assets/images/clients/c3.png";
import HM from "../assets/images/clients/c4.png";
import Lacoste from "../assets/images/clients/c5.png";

const clientData = [
  { id: 1, logo: Adidas, name: "Adidas" },
  { id: 2, logo: Kappa, name: "Kappa" },
  { id: 3, logo: Levis, name: "Levi's" },
  { id: 4, logo: HM, name: "H&M" },
  { id: 5, logo: Lacoste, name: "Lacoste" },
];

const Clients = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const firstChild = sliderRef.current.firstChild;
        sliderRef.current.appendChild(firstChild.cloneNode(true)); // Clone the first child
        sliderRef.current.removeChild(firstChild); // Remove the original first child
      }
    }, 5000); // Adjust the interval for sliding

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="clients">
      <div className="container">
        <div
          className="clients-slider d-flex"
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          ref={sliderRef}
        >
          {clientData.map((client) => (
            <div
              key={client.id}
              className="client-logo"
              style={{
                display: "inline-block",
                padding: "0 15px",
                textAlign: "center",
              }}
            >
              <img
                src={client.logo}
                alt={`Logo of ${client.name}`}
                className="img-fluid grayscale"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
