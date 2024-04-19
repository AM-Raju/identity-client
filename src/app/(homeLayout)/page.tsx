import Banner from "@/components/home/Banner";
import FlashSale from "@/components/home/FlashSale";
import PopularProducts from "@/components/home/PopularProducts";
import TopCategories from "@/components/home/TopCategories";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FlashSale></FlashSale>
      <TopCategories></TopCategories>
      <PopularProducts></PopularProducts>
    </div>
  );
};

export default HomePage;
