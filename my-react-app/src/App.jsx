import './App.css';
import {Navigation} from '../components/Navigation'
import {Header_banner} from '../components/Header_banner'
import {Categories} from '../components/Categories'
import {Discount_card}  from '../components/Discount_card'
import {Sale} from '../components/Sale'
import {Contact} from '../components/Contact'
import {Map} from '../components/Map'

export const App = () => {
  return (
    <>
      <Navigation />
      <Header_banner />
      <Categories />
      <Discount_card />
      <Sale />
      <Contact />
      <Map />
    </>
  );
}

