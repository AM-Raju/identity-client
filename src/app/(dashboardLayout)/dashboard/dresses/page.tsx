import AllProductsTable from "@/components/dashboard/dBAllProducts/AllProductsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Dresses | Dashboard-Identity",
  description: "Be the real you",
};

const AllProductsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-products`, {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <div>
      <h2 className="text-4xl max-w-[95%] mx-auto my-8 font-semibold">
        All Dresses
      </h2>
      <AllProductsTable products={products}></AllProductsTable>
    </div>
  );
};

export default AllProductsPage;
