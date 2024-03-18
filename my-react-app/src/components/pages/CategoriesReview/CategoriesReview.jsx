import Navigation from "../../Navigation/Navigation";
import Categories from "../../Categories/Categories";
import Section from "../../Section/Section";
import Map from "../../Map/Map";
import "./CategoriesReview.css";

export const CategoriesReview = () => {
  return (
    <div className="pageBody">
      <Navigation />
      <Categories showAllCategories={true} />
      <Section />
      <Map />
    </div>
  );
};

