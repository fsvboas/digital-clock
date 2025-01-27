import { Dispatch, SetStateAction } from "react";
import { RegionType } from "../types/region-type";
import Button from "./core/button";

interface RegionsMenuProps {
  regions: RegionType[];
  regionSelected: number;
  setRegionSelected: Dispatch<SetStateAction<number>>;
}

const RegionsMenu = ({
  regions,
  regionSelected,
  setRegionSelected,
}: RegionsMenuProps) => {
  const handleClick = (index: number) => {
    setRegionSelected(index);
  };

  return (
    <div className="flex flex-row space-x-2">
      {regions.map((region, index) => (
        <Button
          key={index}
          onClick={() => handleClick(index)}
          selected={regionSelected === index}
        >
          {region.name}
        </Button>
      ))}
    </div>
  );
};

export default RegionsMenu;
