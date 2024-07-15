import React from "react";

const Hero = () => {
  return (
    <section className="hero-image py-5 d-flex align-items-center">
      <div className="container hero-image-content">
        <h1 className="heading1">
          Motorcycle parts online from local
          <span className="text-danger"> latvian</span> sellers
        </h1>
        <p className="secondary_color mt-4 fs-4">
          Choose from competitively priced used motorcycle parts in one
          marketplace
        </p>
        <div className="d-flex gap-2 secondary_color mt-4 fs-5">
          <div>14-day free returns guaranteed</div>
          <div>Delivery in all of Latvia</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
