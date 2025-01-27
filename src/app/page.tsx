"use client";

import { useState } from "react";
import ClockCard from "./components/clock-card";
import RegionsMenu from "./components/regions-menu";
import { RegionType } from "./types/region-type";

export default function Home() {
  const [regionSelected, setRegionSelected] = useState<number>(0);

  const regions: RegionType[] = [
    {
      name: "Western Americas",
      timezone: "America/Los_Angeles",
    },
    {
      name: "Eastern Americas",
      timezone: "America/New_York",
    },
    {
      name: "South America",
      timezone: "America/Sao_Paulo",
    },
    {
      name: "Europe",
      timezone: "Europe/London",
    },
    {
      name: "Japan, Oceania",
      timezone: "Asia/Tokyo",
    },
  ];

  const selectedRegion = regions[regionSelected];

  return (
    <div className="min-h-screen w-full p-8 flex justify-center items-center">
      <div className="flex flex-col space-y-4">
        <RegionsMenu
          regions={regions}
          regionSelected={regionSelected}
          setRegionSelected={setRegionSelected}
        />
        <ClockCard region={selectedRegion} />
      </div>
    </div>
  );
}
