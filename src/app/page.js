"use client";

import { useState } from "react";

export default function Home() {
  const carParts = [
    "Engine",
    "Transmission",
    "Alternator",
    "Radiator",
    "Brake Pads",
    "Shock Absorbers",
    "Air Filter",
    "Oil Filter",
    "Fuel Pump",
    "Battery",
    "Spark Plugs",
    "Exhaust System",
    "Clutch",
    "Headlights",
    "Tail Lights",
    "Mirrors",
    "Wipers",
    "Tires",
    "Seat Belts",
    "Steering Wheel",
    "Dashboard",
    "Air Conditioning",
    "Carburetor",
    "Turbocharger",
    "Water Pump",
    "Timing Belt",
    "Suspension",
    "Axle",
    "Drive Shaft",
    "Catalytic Converter",
    "Fuel Injector",
    "Camshaft",
    "Crankshaft",
    "Pistons",
    "Cylinder Head",
    "Differential",
    "Wheel Bearings",
    "Brake Discs",
    "Master Cylinder",
    "Ignition Coil",
    "Starter Motor",
    "Alternator Belt",
    "Serpentine Belt",
    "Power Steering Pump",
    "Radiator Fan",
    "Thermostat",
    "Window Regulator",
    "Door Handles",
    "Hood",
    "Trunk Lid",
    "Fenders",
    "Bumpers",
    "Grille",
    "Floor Mats",
    "Roof Rack",
    "Spoiler",
    "Sunroof",
    "Windshield",
    "Side Windows",
    "Rear Window",
    "Antenna",
    "GPS System",
    "Audio System",
    "Speakers",
    "Amplifier",
    "Subwoofer",
    "USB Charger",
    "Phone Mount",
    "Cup Holder",
    "Gear Shift Knob",
    "Pedals",
    "Seat Covers",
    "Steering Wheel Cover",
    "Car Alarm",
    "Parking Sensors",
    "Backup Camera",
    "License Plate Holder",
    // "Tow Hitch",
    // "Jack",
    // "Lug Wrench",
    // "Spare Tire",
    // "Tool Kit",
    // "First Aid Kit",
    // "Emergency Flares",
    // "Fire Extinguisher",
    // "Jumper Cables",
    // "Tire Inflator",
    // "Tire Pressure Gauge",
    // "Snow Chains",
    // "Car Cover",
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
    // "Brake Fluid",
    // "Engine Oil",
    // "Coolant",
    // "Transmission Fluid",
    // "Power Steering Fluid",
    // "Washer Fluid",
  ];

  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 15;

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <main>
      <section className="bg-secondary py-5">
        <div className="container">
          <h1 className="text-light">
            Motorbike parts online from local latvian sellers
          </h1>
          <p>
            Choose from competitively priced used motorbike parts in one
            marketplace
          </p>
          <div className="d-flex gap-2">
            <div>14-day free returns guaranteed</div>
            <div>Delivery in all of EU</div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2>Available Parts</h2>
          <div>
            <ul className="d-flex flex-md-row p-0 gap-5 flex-wrap">
              {(showAll
                ? carParts
                : carParts.slice(0, initialDisplayCount)
              ).map((part, index) => (
                <li key={index}>
                  <a>
                    <button>
                      <img src="https://picsum.photos/id/237/200/200" alt="" />
                      <p>{part}</p>
                    </button>
                  </a>
                </li>
              ))}
            </ul>
            {!showAll && (
              <div className="mt-3">
                <button className="btn btn-primary" onClick={handleShowAll}>
                  Show All Categories
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
