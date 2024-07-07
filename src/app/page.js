"use client";

import { useState } from "react";

export default function Home() {
  const carParts = [
    "Engine",
    "Transmission",
    "Fuel Tank",
    "Carburetor",
    "Air Filter",
    "Oil Filter",
    "Fuel Pump",
    "Battery",
    "Spark Plug",
    "Exhaust System",
    "Muffler",
    "Clutch",
    "Gearbox",
    "Chain",
    "Sprocket",
    "Radiator",
    "Brake Pads",
    "Brake Discs",
    "Brake Caliper",
    "Brake Lever",
    "Brake Master Cylinder",
    "Brake Line",
    "Brake Fluid",
    // "Suspension Fork",
    // "Shock Absorber",
    // "Swingarm",
    // "Frame",
    // "Handlebar",
    // "Grips",
    // "Throttle",
    // "Clutch Lever",
    // "Foot Pegs",
    // "Kickstand",
    // "Side Stand",
    // "Center Stand",
    // "Wheels",
    // "Tires",
    // "Inner Tube",
    // "Wheel Bearings",
    // "Axle",
    // "Fender",
    // "Headlight",
    // "Tail Light",
    // "Turn Signal",
    // "Horn",
    // "Speedometer",
    // "Tachometer",
    // "Odometer",
    // "Fuel Gauge",
    // "Seat",
    // "Seat Cover",
    // "Seat Foam",
    // "Windshield",
    // "Mirrors",
    // "Fuel Cap",
    // "Gas Tank",
    // "Gaskets",
    // "Pistons",
    // "Cylinder Head",
    // "Crankshaft",
    // "Camshaft",
    // "Valves",
    // "Connecting Rod",
    // "Starter Motor",
    // "Ignition Coil",
    // "ECU (Engine Control Unit)",
    // "CDI (Capacitor Discharge Ignition)",
    // "Rectifier",
    // "Regulator",
    // "Stator",
    // "Rotor",
    // "Flywheel",
    // "Drive Belt",
    // "Gear Indicator",
    // "Kick Start",
    // "Radiator Fan",
    // "Coolant",
    // "Thermostat",
    // "Water Pump",
    // "Chain Guard",
    // "License Plate Holder",
    // "Tool Kit",
    // "First Aid Kit",
    // "Emergency Flares",
    // "Fire Extinguisher",
    // "Jumper Cables",
    // "Tire Inflator",
    // "Tire Pressure Gauge",
    // "Snow Chains",
    // "Bike Cover",
    // "Cleaning Supplies",
    // "Wax",
    // "Polish",
    // "Detailing Brush",
    // "Microfiber Cloth",
    // "Vacuum Cleaner",
    // "Air Freshener",
    // "Sun Shade",
    // "Dash Cam",
    // "OBD2 Scanner",
    // "Fuel Additives",
    // "Handlebar Mount",
    // "Phone Mount",
    // "USB Charger",
    // "GPS System",
    // "Audio System",
    // "Speakers",
    // "Amplifier",
    // "Subwoofer",
    // "Bluetooth Helmet",
    // "Riding Gear",
    // "Helmet",
    // "Gloves",
    // "Jacket",
    // "Pants",
    // "Boots",
    // "Body Armor",
    // "Rain Gear",
    // "Riding Suit",
    // "Knee Guards",
    // "Elbow Guards",
    // "Back Protector",
    // "Riding Goggles",
    // "Visor",
    // "Helmet Liner",
    // "Helmet Lock",
    // "Gear Shift Lever",
    // "Brake Pedal",
    // "Kickstand Spring",
    // "Helmet Holder",
    // "Rearview Camera",
    // "Parking Sensors",
    // "Anti-theft Alarm",
    // "Cover Lock",
    // "Chain Lock",
    // "Disc Lock",
    // "GPS Tracker",
    // "Cargo Rack",
    // "Saddle Bags",
    // "Top Box",
    // "Tank Bag",
    // "Tail Bag",
    // "Panniers",
    // "Helmet Bag",
    // "Cargo Net",
    // "Straps",
    // "Bungee Cord",
    // "Luggage Hook",
    // "Trailer Hitch",
    // "Trailer",
    // "Tow Strap"
  ];

  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 15;

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <main>
      <header>
        <nav className="bg_primary_color">
          <div className="container">
            <ul className="d-flex gap-3 py-2 ps-0 mb-0">
              <li>
                <a
                  href="#"
                  className="secondary_color fs-6 fw-medium text-decoration-none"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="secondary_color fs-6 fw-medium text-decoration-none"
                >
                  Payment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="secondary_color fs-6 fw-medium text-decoration-none"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          <div className="container py-2">
            <div className="row d-flex align-items-center">
              <div className="col-2 p-0 d-inline-flex align-items-center">
                <div className="flex-grow-2">
                  <button className="btn border-0">
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                        fill="#e0fbfc"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                  <svg
                    id="logo-70"
                    width="78"
                    height="30"
                    viewBox="0 0 78 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
                      className="ccustom"
                      fill="#e0fbfc"
                    ></path>
                    <path
                      d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
                      className="ccustom"
                      fill="#e0fbfc"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="col-8">
                <form className="d-flex gap-1" role="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="col-2 d-flex justify-content-around">
                <div>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="#e0fbfc"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                      stroke="#e0fbfc"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                      stroke="#e0fbfc"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="hero-image py-5">
        <div className="container hero-image-content">
          <h1 className="heading1">
            Motorbike parts online from local{" "}
            <span className="text-danger">latvian</span> sellers
          </h1>
          <p className="secondary_color">
            Choose from competitively priced used motorbike parts in one
            marketplace
          </p>
          <div className="d-flex gap-2 secondary_color">
            <div>14-day free returns guaranteed</div>
            <div>Delivery in all of EU</div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2>Available Parts</h2>
          <ul className="d-flex flex-md-row p-0 gap-5 flex-wrap justify-content-evenly">
            {(showAll ? carParts : carParts.slice(0, initialDisplayCount)).map(
              (part, index) => (
                <li key={index}>
                  <a>
                    <button className="align-items-center p-0 border border-0 card_hover">
                      <img src="https://picsum.photos/id/237/200/200" alt="" />
                      <p className="mb-0 p-3">{part}</p>
                    </button>
                  </a>
                </li>
              ),
            )}
          </ul>
          {!showAll && (
            <div className="mt-3">
              <button className="btn btn-primary" onClick={handleShowAll}>
                Show All Categories
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
