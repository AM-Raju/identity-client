import { TImage } from "@/types/dress.types";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type TProductDetailsImageProps = {
  image: TImage;
  setEnlargedImage: Dispatch<SetStateAction<string>>;
  enlargedImage: string;
};

const ProductDetailsImageBlock = ({
  image,
  setEnlargedImage,
  enlargedImage,
}: TProductDetailsImageProps) => {
  return (
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
  );
};

export default ProductDetailsImageBlock;
