"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/Hero/hero";
import PartsList from "@/components/PartsList/partslist";
import BrandList from "@/components/BrandList/brandlist";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 15;

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <BrandList />
      <PartsList
        showAll={showAll}
        initialDisplayCount={initialDisplayCount}
        handleShowAll={handleShowAll}
      />
    </main>
  );
}
