import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const groupByCategory = (products) =>
    products.reduce((categories, product) => {
      (categories[product.category] = categories[product.category] || []).push(
        product
      );
      return categories;
    }, {});

  const renderCategory = (categoryName, products) => {
    // Sort products by price (ascending)
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);

    return (
      <div key={categoryName}>
        <h3>{categoryName}</h3>
        <div className="row">
          {sortedProducts.map((product) => (
            <article
              key={product.id}
              className="col-md-3 col-sm-6 single-new-arrival"
              style={{ marginBottom: "20px" }}
            >
              <div className="single-new-arrival-bg">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                  loading="lazy"
                />
                <div className="single-new-arrival-bg-overlay"></div>
                {product.rating.rate > 4 && (
                  <div className="sale bg-1">
                    <p>Top Rated</p>
                  </div>
                )}
                <div className="new-arrival-cart">
                  <p>
                    <span className="lnr lnr-cart"></span>
                    <Link to={`/product/${product.id}`}>
                      add <span>to</span> cart
                    </Link>
                  </p>
                </div>
              </div>
              <h4>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </h4>
              <p className="arrival-product-price">
                ${product.price.toFixed(2)}
              </p>
            </article>
          ))}
        </div>
      </div>
    );
  };

  if (loading) return <p>Loading products...</p>;

  const categorizedProducts = groupByCategory(products);

  return (
    <section id="new-arrivals" className="new-arrivals">
      <div className="container">
        <div className="section-header">
          <h2>New Arrivals</h2>
        </div>
        {Object.keys(categorizedProducts).map((category) =>
          renderCategory(category, categorizedProducts[category])
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
