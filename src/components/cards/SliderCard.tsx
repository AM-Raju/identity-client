import { TDress } from "@/types/dress.types";
import Image from "next/image";
import { GoPlusCircle } from "react-icons/go";

const SliderCard = ({ product }: { product: TDress }) => {
  const { title, image, price, discount } = product;

  const updatedPrice = (price - (discount * price) / 100).toFixed(2);
  return (
    <div className="max-w-72 md:w-80 h-72 overflow-hidden border border-secondary rounded-xl p-5 relative">
      <p className="px-2  py-0.5 absolute bg-secondary text-primary rounded-lg text-xs top-8 left-8 z-10">
        -{discount}%
      </p>
      <div className="w-full h-[75%] rounded-lg overflow-hidden">
        <Image
          className="w-auto h-auto "
          src={image?.front}
          width={300}
          height={150}
          alt="Slider products"
        ></Image>
      </div>
      <h3 className="mt-3 mb-1 truncate">{title}</h3>
      <div className="flex items-center justify-between text-sm">
        <p className="text-secondary">
          ${updatedPrice}{" "}
          <span className="line-through text-primary ml-4">${price}</span>
        </p>
        <GoPlusCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default SliderCard;
