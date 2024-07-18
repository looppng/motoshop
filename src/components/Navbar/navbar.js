import Image from "next/image";
const Navbar = () => {
  return (
    <header>
      <nav className="bg_primary_color">
        <div className="container d-none d-lg-block">
          <ul className="d-flex gap-3 py-2 ps-0 mb-0">
            <li>
              <a href="#" className="secondary_color fs-6 text-decoration-none">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="secondary_color fs-6 text-decoration-none">
                Payment
              </a>
            </li>
            <li>
              <a href="#" className="secondary_color fs-6 text-decoration-none">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="row d-flex align-items-center justify-content-center px-lg-0 px-md-0 px-sm-0 px-3">
            <div className="col-lg-2 col-md-6 col-sm-6 col-6 p-0 py-lg-2 d-inline-flex justify-content-start gap-lg-0 gap-md-4 gap-sm-4 gap-4 mt-lg-0 mt-md-2 mt-sm-2 mt-3 order-lg-1">
              <div className="flex-lg-grow-2 flex-sm-grow-0">
                <button className="btn border-0 px-lg-2 px-md-0 px-sm-1 px-0">
                  <Image width={30} height={30} alt="Menu" src="/menu.svg" />
                </button>
              </div>
              <div className="flex-lg-grow-1 flex-sm-grow-0 d-flex justify-content-center align-items-center">
                <a href="#">
                  <Image width={78} height={30} alt="Logo" src="/logo.svg" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6 p-0 d-inline-flex justify-content-lg-center justify-content-sm-end gap-sm-4 gap-3 justify-content-end mt-lg-0 mt-md-2 mt-sm-2 mt-3 order-lg-3">
              <div>
                <a href="#">
                  <Image width={30} height={30} alt="User" src="/user.svg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <Image width={30} height={30} alt="Heart" src="/heart.svg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <Image width={30} height={30} alt="Cart" src="/cart.svg" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12 p-0 my-sm-2 my-2 order-lg-2">
              <form className="d-flex" role="search">
                <input
                  className="input rounded-0 rounded-start"
                  type="search"
                  placeholder="Part code, name, motorcycle"
                  aria-label="Search"
                />
                <button
                  className="button button-primary rounded-0 rounded-end d-flex justify-content-center align-items-center"
                  type="submit"
                >
                  <svg
                    fill="#000000"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.035,18.069a7.981,7.981,0,0,0,3.938-1.035l3.332,3.332a2.164,2.164,0,0,0,3.061-3.061l-3.332-3.332A8.032,8.032,0,0,0,4.354,4.354a8.034,8.034,0,0,0,5.681,13.715ZM5.768,5.768A6.033,6.033,0,1,1,4,10.035,5.989,5.989,0,0,1,5.768,5.768Z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
