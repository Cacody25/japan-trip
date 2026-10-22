import React from "react";
import { barSpots } from "@/data/bars";
import SectionHeading from "@/components/SectionHeading";
import FoodCard from "@/components/FoodCard";

export default function Bars() {
  return (
    <>
      <SectionHeading
        eyebrow="Nightcaps"
        title="Bars"
        subtitle="Cocktail stops and vinyl listening bars — duck in when the night calls for a record."
      />

      <div className="grid gap-3 px-5 pt-8 md:grid-cols-2 md:gap-4 md:px-8 lg:grid-cols-3">
        {barSpots.map((spot) => (
          <FoodCard key={spot.id} spot={spot} tone="bar" />
        ))}
      </div>
    </>
  );
}
