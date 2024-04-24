import { TDescription } from "@/types/dress.types";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";

type TProductDetailsTitleTextProps = {
  title: string;
  price: number;
  description: TDescription;
};

const ProductDetailsTitleTextBlock = ({
  title,
  price,
  description,
}: TProductDetailsTitleTextProps) => {
  return (
    <div className=" xl:w-[510px] ">
      <div className="mt-3 mb-4">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <div className="flex gap-5 mt-2">
          <p className="text-2xl">${price}</p>
          <div className="border-l-4 border-coal-black pl-4 flex items-center text-yellow-400 gap-2 text-xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalf></FaStarHalf>
          </div>
        </div>
        <hr className="my-8" />
        <div>
          <p>{description.paragraph}</p>

          <ul className="mt-8 ml-5">
            {description.list.map((item: string, index: number) => (
              <li key={index} className="list-disc">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-around items-center border border-gray-300  rounded-full">
                  <button className="text-2xl">-</button>
                  <p>5</p>
                  <button className="text-xl">+</button>
                </div>
                <button className="col-span-2  py-3 rounded-full flex items-center justify-center bg-secondary hover:bg-amber-500 transition-all duration-300">
                  <p>add to cart</p>
                </button>
              </div>
              <button className=" w-full my-3  py-3 rounded-full flex items-center justify-center border-2 border-secondary hover:bg-secondary transition-all duration-300">
                <p>Buy Now</p>
              </button>
            </div>
            <div className="flex gap-8 items-center">
              <LiaShippingFastSolid className="text-4xl text-gray-300" />
              <p>Free worldwide shipping on all orders over $100</p>
            </div>
            <div className="flex gap-8 items-center ">
              <HiOutlineArrowPathRoundedSquare className="text-4xl text-gray-300" />
              <p>Free worldwide shipping on all orders over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTitleTextBlock;
