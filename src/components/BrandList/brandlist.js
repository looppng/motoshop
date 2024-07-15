import React from "react";

import brandList from "@/db/brands";
const BrandList = () => {
  return (
    <section className="container border-bottom">
      <h1>Search by brand</h1>
      <ul className="d-flex p-0 gap-1 flex-wrap">
        {brandList.slice(0, 20).map((brand, index) => (
          <li key={index}>
            <a>
              <button className="align-items-center p-0 border border-0 card_hover">
                <img
                  src={`https://via.placeholder.com/70?text=${brand}`}
                  alt={brand}
                />
              </button>
            </a>
          </li>
        ))}
        <button className="button">All Brands</button>
      </ul>
    </section>
  );
};

export default BrandList;
