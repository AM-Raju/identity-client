"use client";
import { TDress } from "@/types/dress.types";
import Image from "next/image";
import Link from "next/link";

import { addToCart, getTotals } from "@/redux/slices/cartSlice";
import { MdAddShoppingCart } from "react-icons/md";
import { useAppDispatch } from "@/redux/hook";

const TrendingProductCard = ({ product }: { product: TDress }) => {
  const dispatch = useAppDispatch();
  const { _id, title, image, price, discount, ratings } = product;

  const updatedPrice = (price - (discount * price) / 100).toFixed(2);

  const handleCart = (product: TDress) => {
    const { _id, image, title, price } = product;
    const cartItem = { _id, img: image.front, title, price, qty: 1 };

    dispatch(addToCart(cartItem));
    dispatch(getTotals());
  };
  return (
    <div className="w-72 h-[432px] border-2 border-secondary rounded-xl relative group">
      <p className="px-3 py-1 absolute bg-secondary text-primary rounded-xl text-sm top-3 left-3 z-10">
        -{discount}%
      </p>

      <div className="absolute bottom-16 left-3 z-20">
        <div className="relative ">
          <Image
            className="w-12 h-16"
            src={"https://i.ibb.co/7ySY6W7/hot-deal.png"}
            width={100}
            height={148}
            alt="hot deals icon"
          ></Image>
          <div className="flex items-start absolute z-10 bottom-[10px] left-[13px] text-secondary text-sm">
            <p>{ratings}</p>
          </div>
        </div>
      </div>
      <div className="h-[360px] relative overflow-hidden">
        <Image
          className="w-auto h-auto  rounded-lg"
          src={image.front}
          width={286}
          height={360}
          alt="All products"
        ></Image>
        <Link href={`/dresses/${_id}`}>
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
          <button onClick={() => handleCart(product)}>
            <MdAddShoppingCart className="text-2xl text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;
