import React from "react";
import { momAndPopSpots } from "@/data/momAndPop";
import SectionHeading from "@/components/SectionHeading";
import FoodCard from "@/components/FoodCard";

export default function MomAndPop() {
  return (
    <>
      <SectionHeading
        eyebrow="Homie spots"
        title="Mom and Pop"
        subtitle="Small restaurants with a warm, nice feel — the kind of place you'd call a local favorite."
      />

      <div className="grid gap-3 px-5 pt-8 md:grid-cols-2 md:gap-4 md:px-8 lg:grid-cols-3">
        {momAndPopSpots.map((spot) => (
          <FoodCard key={spot.id} spot={spot} tone="mom" />
        ))}
      </div>
    </>
  );
}
