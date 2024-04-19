import Container from "../shared/Container";
import Link from "next/link";
import FlashSaleCard from "../cards/FlashSaleCard";
import { TDress } from "@/types/dress.types";
import Timer from "../shared/Timer";

const FlashSale = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/flash-products`, {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  return (
    <Container>
      <div className="mt-24 mb-40">
        <div className="flex justify-between items-center mb-9 mx-3 xl:mx-0">
          <h3 className="text-4xl font-semibold">Flash Sale</h3>

          <Link href="/flash-sale">
            <button className="px-6 py-2 rounded-full border-2 border-secondary hover:bg-secondary transition-all duration-300 text-secondary hover:text-primary w-28">
              View All
            </button>
          </Link>
        </div>
        <div>
          <div className="mx-auto max-sm:w-72 md:max-xl:max-w-4xl  grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
            {products?.slice(0, 4).map((product: TDress) => (
              <FlashSaleCard
                key={product._id}
                product={product}
              ></FlashSaleCard>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FlashSale;
