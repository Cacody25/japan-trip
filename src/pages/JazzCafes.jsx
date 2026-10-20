import React from "react";
import { jazzCafeSpots } from "@/data/jazzCafes";
import SectionHeading from "@/components/SectionHeading";
import FoodCard from "@/components/FoodCard";

export default function JazzCafes() {
  return (
    <>
      <SectionHeading
        eyebrow="Listen & linger"
        title="Jazz / Music Cafe"
        subtitle="Listening cafes and hi-fi bars — records, coffee, cocktails, and a quieter hour."
      />

      <div className="grid gap-3 px-5 pt-8 md:grid-cols-2 md:gap-4 md:px-8 lg:grid-cols-3">
        {jazzCafeSpots.map((spot) => (
          <FoodCard key={spot.id} spot={spot} tone="cafe" />
        ))}
      </div>
    </>
  );
}
