import Categories from "../../Categories/Categories";
import Navigation from "../../Navigation/Navigation";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import classes from './CategoriesGoods.css';

export const CategoriesGoods = () => {
  return (
    <div className="pageBody">
      <Navigation />
      <Categories />
      <Contact />
      <Map />
    </div>
  );
};

export default CategoriesGoods;