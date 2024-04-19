import ProductCard from "@/components/cards/ProductCard";
import Container from "@/components/shared/Container";
import { TDress } from "@/types/dress.types";
import Image from "next/image";

type TCategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = async ({ params }: TCategoryPageProps) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/dresses/${params.category}`
  );
  const dressCategory = await res.json();

  const { _id, name, image, slug, dresses } = dressCategory[0];

  return (
    <div className="min-h-screen pt-32">
      <Container>
        <div className={`h-52 md:h-96 w-full overflow-hidden relative `}>
          <div className="bg-black absolute w-full mx-auto h-full z-10 bg-opacity-30"></div>
          <div className="absolute w-full h-full z-10 flex items-center justify-center">
            <h1 className=" text-2xl md:text-5xl font-semibold text-secondary ">
              {name}
            </h1>
          </div>
          <Image
            className="relative  w-full mx-auto"
            src={image}
            width={1240}
            height={384}
            alt="Category image"
          ></Image>
        </div>
        <div className="mx-auto max-sm:w-72 md:max-xl:max-w-4xl  grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
          {dresses.map((product: TDress) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
