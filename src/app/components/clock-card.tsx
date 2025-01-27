"use client";

import { useEffect, useState } from "react";
import { getTimeFromTimezone } from "../helpers/get-time";
import { RegionType } from "../types/region-type";
import Button from "./core/button";

interface ClockCardProps {
  region?: RegionType;
}

const ClockCard = ({ region }: ClockCardProps) => {
  const [hourFormat, setHourFormat] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("00:00:00");

  const handleClick = (index: number) => {
    setHourFormat(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (region) {
        setCurrentTime(
          getTimeFromTimezone(
            region.timezone,
            hourFormat === 1 ? "12-hour" : "24-hour"
          )
        );
      }
    }, 0);

    return () => clearInterval(interval);
  }, [region, hourFormat]);

  return (
    <div className="rounded-lg shadow-md border flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold mb-1">Digital Clock</h1>
      <p className="text-sm">Displaying the current time on {region?.name}</p>
      <h2 className="font-bold text-6xl my-4">{currentTime}</h2>
      <div className="space-x-2">
        <Button selected={hourFormat === 0} onClick={() => handleClick(0)}>
          24-Hour Format
        </Button>
        <Button selected={hourFormat === 1} onClick={() => handleClick(1)}>
          12-Hour Format
        </Button>
      </div>
    </div>
  );
};

export default ClockCard;
