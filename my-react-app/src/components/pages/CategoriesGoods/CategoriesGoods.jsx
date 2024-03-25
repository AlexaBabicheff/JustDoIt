import Navigation from "../../Navigation/Navigation";
import CategoryProducts from "../../CategoryProducts/CategoryProducts";
import Section from "../../Section/Section";
import Map from "../../Map/Map";
// import Mind_map from "../../Min_map/Mind_map";

const CategoriesGoods = () => {
  return (
    <div className="CategoriesGoodsContainer">
      <Navigation />
      <CategoryProducts />
      <Section />
      <Map />
    </div>
  );
};

export default CategoriesGoods;
