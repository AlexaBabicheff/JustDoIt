import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AllGoods from './components/pages/AllGoods/AllGoods';
import Bag from './components/pages/Bag/Bag';
import BurgerMenu from './components/pages/BurgerMenu/BurgerMenu';
import CategoriesGoods from './components/pages/CategoriesGoods/CategoriesGoods';
import CategoriesReview from './components/pages/CategoriesReview/CategoriesReview';
import SaleGoods from './components/pages/SaleGoods/SaleGoods';
import OneProduct from './components/pages/OneProduct/OneProduct';
import NotFound from './components/pages/NotFound/NotFound';
import Categories from './components/Categories/Categories';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import OneProductComponent from './components/OneProductComponent/OneProductComponent';
import CategoriesGoodsFilterPanel from './components/CategoriesGoodsFilterPanel/CategoriesGoodsFilterPanel';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/burger-menu" element={<BurgerMenu />} />
          <Route path="/categories-goods/:categoryId" element={<CategoriesGoods />} />
          <Route path="/categories-review" element={<CategoriesReview />} />
          <Route path="/sale-goods" element={<SaleGoods />} />
          <Route path="/all-goods" element={<AllGoods />} />
          <Route path="/one-product-component/:id" element={<OneProductComponent />} />
          <Route path="/categories-goods-filter-panel" element={<CategoriesGoodsFilterPanel />} />
          <Route path="/one-product/:id" element={<OneProduct />} />
          <Route path="/categories/:categoryId" element={<CategoryProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;