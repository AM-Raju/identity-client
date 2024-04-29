import ProductDetails from "@/components/productDetails/ProductDetails";
import { TDress } from "@/types/dress.types";
import { Metadata } from "next";

type TFlashProductDetailsProps = {
  params: {
    productId: string;
  };
};

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.productId;
  // fetch data
  const product = await fetch(`${process.env.BACKEND_URL}/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: `${product.title} | Identity`,
  };
}

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
