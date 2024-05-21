import Categories from "../components/home/categories";
import CompanyInfo from "../components/home/CompanyInfo";
import FeaturedProduct from "../components/home/FeaturedProduct";
import FeedBacks from "../components/home/feedBacks";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <main>
      <FeaturedProduct />
      <Categories />
      <Products />
      <FeedBacks />
      <CompanyInfo />
    </main>
  );
};

export default Home;
