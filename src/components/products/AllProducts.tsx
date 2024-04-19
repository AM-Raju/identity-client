import ProductCard from "../cards/ProductCard";
import { TDress } from "@/types/dress.types";

const AllProducts = ({ products }: { products: TDress[] }) => {
  const totalProducts = products.length;

  return (
    <div>
      <div className="mx-3 xl:mx-0 mb-5">
        <h2 className="text-4xl font-semibold">Our Collection Of Dresses</h2>
        <p className="mt-8 font-semibold">
          Showing 1-{totalProducts} of {totalProducts} item(s)
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
          doloribus?
        </p>
      </div>
      {/* <div className="mt-8 grid grid-cols-3 gap-11"> */}
      <div className="mx-auto max-sm:w-72 md:max-xl:max-w-4xl  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="xl:w-[496px]  px-5 mx-auto py-16 mt-8 text-center">
        <p className="mt-8 text-gray-400 text-sm">Showing 1-12 of 24 item(s)</p>
        <progress
          className="progress h-1  w-full my-6"
          value="70"
          max="100"
        ></progress>
        <div className="w-36 mx-auto">
          <button className="px-6 py-2 rounded-full border-2 border-secondary hover:bg-secondary transition-all duration-300 text-secondary hover:text-primary w-full">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
