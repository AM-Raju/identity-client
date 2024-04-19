import Container from "../shared/Container";
import Link from "next/link";
import ProductCard from "../cards/ProductCard";
import { TDress } from "@/types/dress.types";
import TrendingProductCard from "../cards/TrendingProductCard";

const PopularProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/top-reviews`, {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  return (
    <Container>
      <div className="my-40">
        <div className="flex justify-between items-center mb-9 mx-3 xl:mx-0">
          <div>
            <h3 className="text-4xl font-semibold">Trending Dresses</h3>
            <p className="max-w-[60ch] mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus beatae corrupti, sunt unde fuga nisi.
            </p>
          </div>
          <Link href="/dresses">
            <button className="px-6 py-2 rounded-full border-2 border-secondary hover:bg-secondary transition-all duration-300 text-secondary hover:text-primary w-28">
              View All
            </button>
          </Link>
        </div>
        <div className="mt-10 mx-auto max-sm:w-72 md:max-xl:max-w-4xl  grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {products?.slice(0, 6).map((product: TDress) => (
            <TrendingProductCard
              key={product._id}
              product={product}
            ></TrendingProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularProducts;
