import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-image py-lg-5 py-md-5 py-sm-2 py-2 d-flex align-items-center">
      <div className="container hero-image-content p-lg-0 p-md-0 p-sm-0 p-3">
        <h1 className="secondary_color heading1 text-wrap fw-normal pe-40 mb-lg-3 mb-md-2">
          Motorcycle parts online from local
          <span className="text-danger"> Latvian</span> sellers
        </h1>
        <p className="secondary_color fs-5 fw-light mb-5">
          Choose from competitively priced used motorcycle parts in one
          marketplace
        </p>
        <p className="secondary_color fs-5 fw-normal">
          Motorcycle parts search
        </p>
        <div className="row m-0">
          <form
            className="d-flex flex-lg-row flex-md-column flex-column p-0"
            role="search"
          >
            <div className="col-lg-3 col-md-12 col-12">
              <input
                className="input rounded-0"
                type="search"
                placeholder="Brand"
                aria-label="Search"
              />
            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <input
                className="input rounded-0"
                type="search"
                placeholder="Model"
                aria-label="Search"
              />
            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <input
                className="input rounded-0"
                type="search"
                placeholder="Modification"
                aria-label="Search"
              />
            </div>
            <div className="col-lg-2 col-md-12 col-12">
              <input
                className="input rounded-0"
                type="search"
                placeholder="Part name"
                aria-label="Search"
              />
            </div>
            <div className="col-lg-1 col-md-12 col-12">
              <button className="w-100 h-100 button" type="submit">
                <Image width={20} height={20} alt="Search" src="/find.svg" />
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex flex-lg-row flex-md-column flex-column gap-lg-4 gap-md-1 pt-5">
          <div className="d-inline-flex align-items-center gap-2">
            <Image width={20} height={20} alt="Refresh" src="/refresh.svg" />
            <p className="m-0 secondary_color fw-lighter">
              14-day free returns guaranteed
            </p>
          </div>
          <div className="d-inline-flex align-items-center gap-2">
            <Image width={20} height={20} alt="Delivery" src="/delivery.svg" />
            <p className="m-0 secondary_color fw-lighter">
              Delivery in all of Latvia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
