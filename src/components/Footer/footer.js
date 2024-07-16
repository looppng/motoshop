import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-5">
      <div className="container">
        <div className="row d-flex">
          <div className="col-3">
            <p>
              Finding and purchasing a used car part has never been so easy!
            </p>
          </div>
          <div className="col-3">
            <h3>MotoShop</h3>
            <p className="d-inline-flex flex-column">
              <a href="#">About Us</a>
              <a href="#">Privacy policy</a>
              <a href="#">Contacts</a>
              <a href="#">Sell</a>
            </p>
          </div>
          <div className="col-3">
            <h3>Information</h3>
            <p className="d-inline-flex flex-column">
              <a href="#">Delivery</a>
              <a href="#">Payment</a>
              <a href="#">Returns</a>
              <a href="#">Terms of use</a>
              <a href="#">Spare parts list</a>
              <a href="#">Tire size comparison calculator</a>
            </p>
          </div>
          <div className="col-3">
            <h3>Follow us</h3>
            <p className="d-inline-flex flex-column">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Youtube</a>
              <a href="#">Twitter/X</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>The most popular categories of used motorcycle parts</h3>
            <p className="d-inline-flex gap-2">
              <a href="">Harley-Davidson parts</a>
              <a href="">Honda parts</a>
              <a href="">Yamaha parts</a>
              <a href="">Kawasaki parts</a>
              <a href="">Suzuki parts</a>
              <a href="">BMW parts</a>
              <a href="">Ducati parts</a>
              <a href="">Ducati parts</a>
              <a href="">Triumph parts</a>
              <a href="">KTM parts</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-primary">
        <div className="col-12 d-inline-flex flex-column justify-content-center align-items-center">
          <p>2024© MotoShop All rights reserved</p>
          <p>
            Copying and distributing the information available on the website
            without a consent is prohibited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
