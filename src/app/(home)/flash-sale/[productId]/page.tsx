import ProductDetails from "@/components/productDetails/ProductDetails";
import { TDress } from "@/types/dress.types";

type TFlashProductDetailsProps = {
  params: {
    productId: string;
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/flash-products`);
  const flashProducts = await res.json();
  return flashProducts.slice(0, 4).map((product: TDress) => ({
    productId: product._id,
  }));
};

const FlashProductDetailsPage = async ({
  params,
}: TFlashProductDetailsProps) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );

  const product = await res.json();
  return <ProductDetails product={product}></ProductDetails>;
};

export default FlashProductDetailsPage;
