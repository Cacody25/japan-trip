import React from "react";
import { foodSpots } from "@/data/food";
import SectionHeading from "@/components/SectionHeading";
import FoodCard from "@/components/FoodCard";

export default function Food() {
  return (
    <>
      <SectionHeading
        eyebrow="Backup eats"
        title="Food!"
        subtitle="Spots that aren't locked to a day — duck in if you're nearby or need a meal."
      />

      <div className="grid gap-3 px-5 pt-8 md:grid-cols-2 md:gap-4 md:px-8 lg:grid-cols-3">
        {foodSpots.map((spot) => (
          <FoodCard key={spot.id} spot={spot} />
        ))}
      </div>
    </>
  );
}
