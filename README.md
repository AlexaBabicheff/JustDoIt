# JustDoIt
Project-FRONT-END
Проект в ветке Sprint2 полностью обновлен. Проект получил новую структуру, переключаемые страницы, генеральное управдение стидями всего сайта.

Ребята, обратите внимание, файлы App.jsx, App.css, index.js и index.css были обновлены 16 марта 2024 года.

Файл App.jsx программа не пропустила в полном размере. 

Перед началом работы скопируйте в шапку файла иипорты: 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AllGoods from './components/pages/AllGoods/AllGoods';
import Bag from './components/pages/Bag/Bag';
import BurgerMenu from './components/pages/BurgerMenu/BurgerMenu';
import CategoriesGoods from './components/pages/CategoriesGoods/CategoriesGoods';
import { CategoriesReview } from './components/pages/CategoriesReview/CategoriesReview';
import SaleGoods from './components/pages/SaleGoods/SaleGoods';
import OneProduct from './components/pages/OneProduct/OneProduct';
import NotFound from './components/pages/NotFound/NotFound';

