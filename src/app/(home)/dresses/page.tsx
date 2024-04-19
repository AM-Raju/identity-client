import AllProducts from "@/components/products/AllProducts";
import CategoryDropDown from "@/components/products/CategoryDropDown";
import PriceRange from "@/components/products/PriceRange";
import SortByRating from "@/components/products/SortByRating";
import Container from "@/components/shared/Container";

const AllProductsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-products`, {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <Container>
      <div className="  pt-32 pb-40">
        <div className="  grid grid-cols-12 gap-8">
          <div className=" col-span-12 md:col-span-3 space-y-8">
            <PriceRange></PriceRange>
            <CategoryDropDown></CategoryDropDown>
            <SortByRating></SortByRating>
          </div>
          <div className="col-span-12 md:col-span-9 ">
            <AllProducts products={products}></AllProducts>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllProductsPage;
