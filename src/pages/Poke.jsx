import React from "react";
import { pokeSpots } from "@/data/poke";
import SectionHeading from "@/components/SectionHeading";
import FoodCard from "@/components/FoodCard";

export default function Poke() {
  return (
    <>
      <SectionHeading
        eyebrow="Gotta catch 'em"
        title="Poke!"
        subtitle="Official Pokémon Centers, Stores, and cafés from Pokémon Center Co. — Tokyo plus Yokohama, Narita, and Tokyo-Bay."
      />

      <div className="grid gap-3 px-5 pt-8 md:grid-cols-2 md:gap-4 md:px-8 lg:grid-cols-3">
        {pokeSpots.map((spot) => (
          <FoodCard key={spot.id} spot={spot} tone="poke" />
        ))}
      </div>
    </>
  );
}
