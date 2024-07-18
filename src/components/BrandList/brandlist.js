import brandList from "@/db/brands";
import Image from "next/image";
const BrandList = () => {
  return (
    <section className="container border-bottom py-lg-4 py-md-4 py-sm-2 py-2 px-lg-0 px-md-0 px-sm-0 px-3">
      <h1 className="heading2 fw-medium pb-4 m-0">Search by brand</h1>
      <ul className="brand-grid m-0 p-0">
        {brandList.slice(0, 20).map((brand, index) => (
          <li key={index} className="brand-item">
            <a href="#">
              <img
                src={`https://picsum.photos/seed/picsum/300/250`}
                alt={brand}
                className="brand-image"
              />
            </a>
          </li>
        ))}
        <button className="button">All Brands</button>
      </ul>
    </section>
  );
};

export default BrandList;
