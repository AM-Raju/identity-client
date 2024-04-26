"use client";
import Container from "@/components/shared/Container";
import { TDress } from "@/types/dress.types";
import {  useState } from "react";
import ProductDetailsImageBlock from "./ProductDetailsImageBlock";
import ProductDetailsTitleTextBlock from "./ProductDetailsTitleTextBlock";


const ProductDetails = ({ product }: { product: TDress }) => {
 
  const { image, description } = product;

  const [enlargedImage, setEnlargedImage] = useState(image.front);

  return (
    <div className="pt-32 pb-40">
      <Container>
        <div className="flex flex-col xl:flex-row gap-x-20 mx-2 xl:mx-0">
          {/* Image section */}
          <ProductDetailsImageBlock
            image={image}
            setEnlargedImage={setEnlargedImage}
            enlargedImage={enlargedImage}
          ></ProductDetailsImageBlock>
          {/* Title text block */}
          <ProductDetailsTitleTextBlock
            product={product}
          ></ProductDetailsTitleTextBlock>
        </div>
      </Container>
      {/* Description text block */}
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
