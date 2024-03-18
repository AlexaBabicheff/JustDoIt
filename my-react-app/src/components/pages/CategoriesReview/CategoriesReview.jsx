import Navigation from "../../Navigation/Navigation";
import Categories from "../../Categories/Categories";
import Section from "../../Section/Section";
import Map from "../../Map/Map";
import Mind_map from '../../Min_map/Mind_map';
import "./CategoriesReview.css";

export const CategoriesReview = () => {
  return (
    <div className="pageBody">
      <Navigation />
      <Mind_map />
      <Categories showAllCategories={true} />
      <Section />
      <Map />
    </div>
  );
};

