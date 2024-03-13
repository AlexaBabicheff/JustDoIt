import './App.css';
import {Navigation} from './components/Navigation/Navigation'
import {HeaderBanner} from './components/HeaderBanner/HeaderBanner'
import {Categories} from './components/Categories/Categories'
import {DiscountCard}  from './components/DiscountCard/Discount'
import {Sale} from './components/Sale/Sale'
import {Contact} from './components/Contact/Contact'
import {Map} from './components/Map/Map'

export const App = () => {
  return (
    <>
      <Navigation />
      <HeaderBanner />
      <Categories />
      <DiscountCard />
      <Sale />
      <Contact />
      <Map />
    </>
  );
  }