import { TDress } from "@/types/dress.types";
import FlashSaleCard from "../cards/FlashSaleCard";
import Container from "../shared/Container";
import Timer from "../shared/Timer";

const AllFlashProducts = ({ products }: { products: TDress[] }) => {
  const totalProducts = products.length;

  const time = new Date();
  time.setSeconds(time.getSeconds() + 1295999);

  return (
    <Container>
      <div>
        <div className="flex justify-between">
          <div className="px-3 xl:px-0 mb-5">
            <h2 className="text-4xl font-semibold">
              Our Flash-Sale Collections
            </h2>
            <p className="mt-8 font-semibold">
              Showing 1-{totalProducts} of {totalProducts} item(s)
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, doloribus?
            </p>
          </div>
          <Timer expiryTimestamp={time}></Timer>
        </div>

        <div className="mx-auto max-sm:w-72 md:max-xl:max-w-4xl  grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <FlashSaleCard key={product._id} product={product}></FlashSaleCard>
          ))}
        </div>
        <div className="px-3 md:w-[496px]  mx-auto py-16 mt-8 text-center">
          <p className="mt-8 text-gray-400 text-sm">
            Showing 1-12 of 24 item(s)
          </p>
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
    </Container>
  );
};

export default AllFlashProducts;
