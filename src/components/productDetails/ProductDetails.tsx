"use client";
import Container from "@/components/shared/Container";
import { TDress } from "@/types/dress.types";
import Image from "next/image";
import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

import { FaStar, FaStarHalf } from "react-icons/fa6";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import Rating from "react-rating";

const ProductDetails = ({ product }: { product: TDress }) => {
  const { title, image, price, description, ratings } = product;

  const [enlargedImage, setEnlargedImage] = useState(image.front);

  return (
    <div className="pt-32 pb-40">
      <Container>
        <div className="flex flex-col xl:flex-row gap-x-20 mx-2 xl:mx-0">
          {/* Image section */}
          <div className=" md:h-[532px] w-96 md:w-[700px] mx-auto flex max-md:flex-col-reverse   gap-8 ">
            <div className="w-[90%] ml-2  md:w-40 h-full flex md:flex-col justify-between gap-8">
              <div
                onClick={() => setEnlargedImage(image.front)}
                className="w-full h-24 md:h-40 border border-secondary  overflow-hidden"
              >
                <Image
                  src={image.front}
                  width={286}
                  height={360}
                  alt="Flash sale product"
                ></Image>
              </div>
              <div
                onClick={() => setEnlargedImage(image.var1)}
                className="w-full h-24 md:h-40  border border-secondary overflow-hidden"
              >
                <Image
                  src={image.var1}
                  width={286}
                  height={360}
                  alt="Flash sale product"
                ></Image>
              </div>
              <div
                onClick={() => setEnlargedImage(image.var2)}
                className="w-full h-24 md:h-40 border border-secondary overflow-hidden"
              >
                <Image
                  src={image.var2}
                  width={286}
                  height={360}
                  alt="Flash sale product"
                ></Image>
              </div>
            </div>
            <div className="border border-secondary w-[90%] ml-2 md:w-[528px] h-96 md:h-full overflow-hidden">
              <Image
                className="w-full mx-auto my-auto"
                src={enlargedImage}
                width={286}
                height={360}
                alt="Flash sale product"
              ></Image>
            </div>
          </div>
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
        </div>
      </Container>
      <div className="py-20 bg-zinc-100 mt-20 px-2 xl:px-0">
        <Container>
          <p>{description.paragraph}</p>

          <ul className="mt-8 ml-5">
            {description.list.map((item: string, index: number) => (
              <li key={index} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetails;
