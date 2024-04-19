import Link from "next/link";

import SliderCard from "../cards/SliderCard";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import { TDress } from "@/types/dress.types";

const Slider = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-products`);
  const products = await res.json();

  return (
    <div className="w-full flex items-center justify-center pb-16 md:pb-0">
      <div className="carousel w-[90%] md:w-3/4  ">
        {/* Slider */}
        <div
          id="slide1"
          className="carousel-item relative w-full flex flex-col md:flex-row items-center justify-center gap-5  "
        >
          {products?.slice(0, 3).map((product: TDress) => (
            <SliderCard key={product?._id} product={product}></SliderCard>
          ))}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <Link href="#slide3">
              <AiFillLeftSquare className="text-4xl text-gray-400 hover:text-secondary transition-all duration-300" />
            </Link>

            <Link href="#slide2">
              <AiFillRightSquare className="text-4xl text-gray-400 hover:text-secondary transition-all duration-300" />
            </Link>
          </div>
        </div>
        {/* Slider */}
        <div
          id="slide2"
          className="carousel-item relative w-full flex flex-col md:flex-row items-center justify-center gap-5"
        >
          {products?.slice(3, 6).map((product: TDress) => (
            <SliderCard key={product?._id} product={product}></SliderCard>
          ))}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <Link href="#slide1">
              <AiFillLeftSquare className="text-4xl text-gray-400 hover:text-secondary transition-all duration-300" />
            </Link>

            <Link href="#slide3">
              <AiFillRightSquare className="text-4xl text-gray-400 hover:text-secondary transition-all duration-300" />
            </Link>
          </div>
        </div>
        {/* Slider */}
        <div
          id="slide3"
          className="carousel-item relative w-full flex flex-col md:flex-row items-center justify-center gap-5 "
        >
          {products?.slice(6, 9).map((product: TDress) => (
            <SliderCard key={product?._id} product={product}></SliderCard>
          ))}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <Link href="#slide2">
              <AiFillLeftSquare className="text-4xl text-white hover:text-secondary transition-all duration-300" />
            </Link>

            <Link href="#slide1">
              <AiFillRightSquare className="text-4xl text-white hover:text-secondary transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
