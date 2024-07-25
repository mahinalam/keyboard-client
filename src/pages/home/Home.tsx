import Hero from "./hero/Hero";
import ServiceAdvertisement from "./service/Service";
import Title from "@/components/Title";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import FeaturedBrands from "./featuredProducts/FeatureBrand";
import Review from "./Review";
import { useAppSelector } from "@/redux/hooks";

const Home = () => {
  const products = useAppSelector((state) => state.products);
  console.log(products);
  return (
    <div>
      <Hero></Hero>
      <ServiceAdvertisement />
      <Title title="New arrival" subTitle="Shop now" />
      <FeaturedProducts />
      <FeaturedBrands />
      <Review />
    </div>
  );
};

export default Home;
