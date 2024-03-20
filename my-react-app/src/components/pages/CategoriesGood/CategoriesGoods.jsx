import Categories from "../../Categories/Categories";
import Navigation from "../../Navigation/Navigation";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";

const CategoriesGoods = () => {
  return (
    <div className="pageBody">
      <Navigation />
      <div className="line">
        <hr />
      </div>
      <div className="btns">
        <div className="main_page">
          <button className="cat">Main Page</button>
        </div>
        <div className="categories_page">
          <button className="dog">Categories</button>
        </div>
      </div>
      <div className="categories_component">
        <Categories />
      </div>
      <div className="contact_component">
        <Contact />
      </div>
      <div className="map_component">
        <Map />
      </div>
    </div>
  );
};

export default CategoriesGoods;
