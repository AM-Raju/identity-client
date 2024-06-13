"use client";
import { ChangeEvent, useState } from "react";

const priceRangeFn = (rangeArr: string[]) => {
  let arr1 = [];

  for (let range of rangeArr) {
    arr1.push(...range.split("-"));
  }

  console.log(arr1);
  const arr2 = arr1.sort((a, b) => Number(a) - Number(b));
  console.log(arr2);

  return {
    startPrice: Number(arr2[0]),
    endPrice: Number(arr2[arr2.length - 1]),
  };
};

const PriceRange = () => {
  const [selectedRanges, setSelectedRanges] = useState<string[]>([]);

  // ["00-50", "51-100", "101-150", "151-200"];
  let priceRange;
  if (selectedRanges) {
    priceRange = priceRangeFn(selectedRanges);
  }

  console.log("Price range", priceRange);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Event", event);

    const { name, checked } = event.target;

    if (checked) {
      setSelectedRanges([...selectedRanges, name]);
    } else {
      setSelectedRanges(selectedRanges.filter((range) => range !== name));
    }
  };
  return (
    <div className=" border border-secondary px-8 py-10">
      <h1 className="border-l-4 pl-3 border-coal-black text-xl">Price range</h1>
      <div className="mt-6 space-y-4 ">
        <div className="flex items-center gap-5 ">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="00-50"
            id="00-50"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="">$00 - $50</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="51-100"
            id="51-100"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="">$51 - $100</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="101-150"
            id="101-150"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="">$101 - $150</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="151-200"
            id="151-200"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="">$151 - $200</label>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
