"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/Hero/hero";
import PartsList from "@/components/PartsList/partslist";
import BrandList from "@/components/BrandList/brandlist";
import AboutUs from "@/components/About/about";
import Footer from "@/components/Footer/footer";

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <BrandList />
      <PartsList showAll={showAll} handleShowAll={handleShowAll} />
      <AboutUs />
      <Footer />
    </main>
  );
}
