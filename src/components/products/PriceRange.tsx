"use client";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { priceRangeFn, rangeArrFn } from "@/utils/utils";
import { ChangeEvent, useState } from "react";

const PriceRange = () => {
  const { data, isLoading } = useGetProductsQuery("");
  // console.log(data);
  let rangeArr;
  if (!isLoading) {
    rangeArr = rangeArrFn(data);
  }

  console.log(rangeArr);

  const [selectedRanges, setSelectedRanges] = useState<string[]>([]);

  // ["00-50", "51-100", "101-150", "151-200"];
  let priceRange;
  if (selectedRanges) {
    priceRange = priceRangeFn(selectedRanges);
  }

  console.log(priceRange); // Now set it to the state and start filter operation

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        {rangeArr?.map((range, index) => (
          <div key={index} className="flex items-center gap-5 ">
            <input
              className=" focus:ring-0 focus:ring-offset-0  size-5"
              type="checkbox"
              name={`${range[0] === 0 ? "00" : range[0]} - ${range[1]}`}
              id={`${range[0] === 0 ? "00" : range[0]} - ${range[1]}`}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="">
              ${range[0] === 0 ? "00" : range[0]} - ${range[1]}
            </label>
          </div>
        ))}
        {/*    <div className="flex items-center gap-5">
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
        </div> */}
      </div>
    </div>
  );
};

export default PriceRange;
