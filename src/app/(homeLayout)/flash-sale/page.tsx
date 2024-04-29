import AllFlashProducts from "@/components/flash-sale/AllFlashProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash Sale | Identity",
  description: "Be the real you",
};

const FlashSalePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/flash-products`, {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div className="pt-32 pb-40">
      <AllFlashProducts products={products}></AllFlashProducts>
    </div>
  );
};

export default FlashSalePage;
