import { TDress } from "@/types/dress.types";

export const rangeArrFn = (dresses: TDress[]) => {
  const priceGap = 50;
  let priceArr = [];
  let rangeArr = [];

  for (let dress of dresses) {
    priceArr.push(dress?.price);
  }

  const highestPrice = Math.floor(
    priceArr.sort((a, b) => a - b)[priceArr.length - 1]
  );

  const rangeLimit = Math.ceil(highestPrice / priceGap) * priceGap;

  let currentRange = 0;
  for (let i = 0; currentRange < rangeLimit; i++) {
    if (i < 1) {
      rangeArr.push([currentRange, currentRange + priceGap]);
      currentRange = currentRange + priceGap;
    } else {
      rangeArr.push([currentRange + 1, currentRange + priceGap]);
      currentRange = currentRange + priceGap;
    }
  }

  return rangeArr;
};

export const priceRangeFn = (rangeArr: string[]) => {
  let arr1 = [];

  for (let range of rangeArr) {
    arr1.push(...range.split("-"));
  }

  const arr2 = arr1.sort((a, b) => Number(a) - Number(b));

  return {
    startPrice: Number(arr2[0]),
    endPrice: Number(arr2[arr2.length - 1]),
  };
};
