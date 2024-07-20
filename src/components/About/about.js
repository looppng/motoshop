import React from "react";

const AboutUs = () => {
  return (
    <section className="pt-4 pb-5 border border-bottom mb-3 px-3">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 py-2 ps-0">
            <h1 className="fw-normal">
              MotoShop - the largest used motorcycle parts portal in Latvia
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-12 ps-0 fs-5 fw-light">
            <p>
              <b>MotoShop</b> – it has never been easier to find and purchase a
              required motorcycle part!
            </p>
            <p>
              We will help you save time, money and make sure that parts are
              delivered to you, without leaving your home. Choose your car make
              and model, or simply enter the part number, the rest is easy.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12 ps-0 fs-5 fw-light">
            <p>
              Simply complete payment and the part will be shipped out! It has
              never been easier to purchase car parts online.
            </p>
            <p>
              If any parts that you purchased online will not fit, we will cover
              you by offering a 14-day money-back guarantee, so you won’t have
              to worry about anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
