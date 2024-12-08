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

import imgblog1 from "../assets/images/blog/b1.jpg";
import imgblog2 from "../assets/images/blog/b2.jpg";
import imgblog3 from "../assets/images/blog/b3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Why Brands are Looking at Local Language",
    author: "Robert Norby",
    date: "2018-03-18", // Updated to ISO-8601 format
    imgSrc: imgblog1,
    excerpt:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....",
  },
  {
    id: 2,
    title: "Why Local Content Matters for Growth",
    author: "Emily Watson",
    date: "2018-03-25", // Updated to ISO-8601 format
    imgSrc: imgblog2,
    excerpt:
      "Discover how localized content strategies are reshaping the future of brand engagement and customer loyalty in a global market....",
  },
  {
    id: 3,
    title: "Harnessing the Power of Local Dialects",
    author: "John Doe",
    date: "2018-04-05", // Updated to ISO-8601 format
    imgSrc: imgblog3,
    excerpt:
      "Learn how brands are leveraging local dialects to connect with audiences on a deeper, more personal level....",
  },
];

const Blogsection = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2>Latest Blog</h2>
        </div>
        <div className="blog-content">
          <div className="row">
            {blogPosts.map((post) => (
              <article className="col-sm-4 single-blog" key={post.id}>
                <div className="single-blog-img">
                  <img src={post.imgSrc} alt={`Blog post: ${post.title}`} />
                  <div className="single-blog-img-overlay"></div>
                </div>
                <div className="single-blog-txt">
                  <h2>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <h3>
                    By <span>{post.author}</span> /{" "}
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="btn btn-read-more"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogsection;
