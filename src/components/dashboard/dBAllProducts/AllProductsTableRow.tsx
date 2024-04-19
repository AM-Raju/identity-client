import { TDress } from "@/types/dress.types";
import Image from "next/image";

import { FaTrash } from "react-icons/fa6";

const AllProductsTableRow = ({ product }: { product: TDress }) => {
  const {
    image,
    title,
    price,
    ratings,
    category,
    flashSale,
    discount,
    reviewCount,
  } = product;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className=" w-24 h-16 overflow-hidden border">
              <Image
                className="w-full"
                src={image.front}
                width={50}
                height={80}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{flashSale ? "Flash" : "Normal"}</td>
      <td>${price}</td>
      <td>{ratings}</td>
      <td>{reviewCount}</td>
      <td>{discount}%</td>
      <td>
        <button>
          {" "}
          <FaTrash className="text-xl text-primary hover:text-red-900 transition-all duration-300"></FaTrash>
        </button>
      </td>
    </tr>
  );
};

export default AllProductsTableRow;
