import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AllGoods from './components/pages/AllGoods/AllGoods';
// import Bag from './components/pages/Bag/Bag';
import CategoriesGoods from './components/pages/CategoriesGoods/CategoriesGoods';
import CategoriesReview from './components/pages/CategoriesReview/CategoriesReview';
import AllProducts from './components/pages/AllProducts/AllProducts';
import AllSales from './components/pages/AllSales/AllSales';
import Favorites from './components/pages/Favorites/Favorites';
import Basket from './components/pages/Basket/Basket';
import BurgerMenu from './components/pages/BurgerMenu/BurgerMenu';
import OneProduct from './components/pages/OneProduct/OneProduct';
import NotFound from './components/pages/NotFound/NotFound';
import Categories from './components/Categories/Categories';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import OneProductComponent from './components/OneProductComponent/OneProductComponent';
import FiltersPanel from './components/Filter/FiltersPanel';
import ProductCounter from './components/ProductCounter/ProductCounter';
import './App.css';
import SortingFilteringPanel from './components/SortingFilteringPanel/containers/SortingFilteringPanel.jsx';
import ProductsList from './components/SortingFilteringPanel/containers/ProductsList.jsx';
import Button from './components/Button/Button.component.jsx';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/burger-menu" element={<BurgerMenu />} />
          <Route path='/filters-panel' element={<FiltersPanel />} />
          <Route path="/categories-goods/:categoryId" element={<CategoriesGoods />} />
          <Route path="/categories-review" element={<CategoriesReview />} />
          <Route path="/sale-goods" element={<AllSales />} />
          <Route path="/all-goods" element={<AllGoods />} />
          <Route path="/one-product-component/:id" element={<OneProductComponent />} />
          <Route path="/one-product/:id" element={<OneProduct />} />
          <Route path="/product-counter" element={<ProductCounter />} />
          <Route path="/categories/:categoryId" element={<CategoryProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/sorting-filtering-panel" element={<SortingFilteringPanel />} /> */}
          <Route path="/product-list" element={<ProductsList />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;