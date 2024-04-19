import Container from "../shared/Container";
import Image from "next/image";
import CategoryCard from "../cards/CategoryCard";
import { TCategory } from "@/types/category.types";

const TopCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/categories`);
  const categories = await res.json();

  return (
    <Container>
      <div>
        <div className="text-center">
          <h3 className="text-4xl font-semibold">Top Categories</h3>
          <p className="max-w-[70ch] mx-auto mt-3 mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae
            iusto deserunt nostrum porro neque voluptatem modi blanditiis
            delectus, vitae quasi vero ducimus magni.
          </p>
        </div>
        <div className=" w-full max-xl:px-2   md:h-[590px] grid grid-cols-12 grid-rows-3 gap-8 ">
          {categories?.slice(0, 6).map((category: TCategory, index: number) => (
            <CategoryCard
              key={index}
              category={category}
              index={index}
            ></CategoryCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TopCategories;
