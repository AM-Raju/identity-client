import ProductDetails from "@/components/productDetails/ProductDetails";
import { TDress } from "@/types/dress.types";

type TProductDetailsProps = {
  params: {
    productId: string;
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-products`);
  const products = await res.json();
  return products.slice(0, 4).map((product: TDress) => ({
    productId: product._id,
  }));
};

const ProductDetailsPage = async ({ params }: TProductDetailsProps) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );

  const product = await res.json();

  return (
    <div>
      <ProductDetails product={product}></ProductDetails>
    </div>
  );
};

export default ProductDetailsPage;
