"use client";
import { TCategory } from "@/types/category.types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type TCategoryCardProps = {
  category: TCategory;
  index: number;
};
const CategoryCard = ({ category, index }: TCategoryCardProps) => {
  const [customClass, setCustomClass] = useState("");

  useEffect(() => {
    if (index === 0 || index === 2) {
      setCustomClass("col-span-12 md:col-span-4 md:row-span-2");
    } else if (index === 4 || index === 5) {
      setCustomClass("col-span-12 md:col-span-6 ");
    } else {
      setCustomClass("col-span-12 md:col-span-4");
    }
  }, [index]);

  return (
    <div
      className={`bg-red-100 h-full overflow-hidden  rounded-xl relative group ${customClass}`}
    >
      <Link href={`/categories/${category?.slug}`}>
        <div className="absolute z-50  h-full  w-full flex items-center justify-center text-4xl font-semibold   text-white ">
          <div className="group-hover:h-16 group-hover:w-full text-center bg-secondary bg-opacity-80 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
            <h4 className="">{category.name}</h4>
          </div>
        </div>
        <Image
          className=" object-cover w-full h-full"
          src={category?.image}
          alt="Men's dress"
          width={405}
          height={384}
        ></Image>
      </Link>
    </div>
  );
};

export default CategoryCard;
