import { TDress } from "@/types/dress.types";
import Image from "next/image";
import Link from "next/link";

import { GoPlusCircle } from "react-icons/go";

const FlashSaleCard = ({ product }: { product: TDress }) => {
  const { _id, title, image, price, discount } = product;

  const day = Math.floor(Math.random() * 15);

  const updatedPrice = (price - (discount * price) / 100).toFixed(2);
  return (
    <div className="w-72 h-[432px] border-2 border-secondary rounded-xl relative group">
      <p className="px-3 py-1 absolute bg-secondary text-primary rounded-xl text-sm top-3 left-3 z-10">
        -{discount}%
      </p>
      <p className="px-3 py-1 absolute bg-secondary text-primary rounded-xl text-sm top-3 right-3 z-10">
        {day}d
      </p>
      <div className="h-[360px] relative overflow-hidden">
        <Image
          className="  rounded-lg"
          src={image.front}
          width={286}
          height={360}
          alt="Flash sale product"
        ></Image>
        <Link href={`/flash-sale/${_id}`}>
          <div className="bg-secondary absolute w-full top-1/2 translate-y-60 group-hover:translate-y-0 transition-all duration-700  flex items-center justify-center  ">
            <button className="text-xl w-full py-5 text-primary">
              View Details
            </button>
          </div>
        </Link>
      </div>
      <div className="px-3 mt-3">
        <h4 className="truncate">{title}</h4>
        <div className="flex items-center justify-between text-xs">
          <p className="text-secondary">
            ${updatedPrice}{" "}
            <span className="line-through ml-3 text-primary">${price}</span>
          </p>
          <GoPlusCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
