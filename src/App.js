import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/home";
import Productfakeapi from "./components/Productfakeapi/productfakeapi";
import Features from "./components/Features/features";
import Blogpage from "./components/Blog/blog";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productfakeapi" element={<Productfakeapi />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
