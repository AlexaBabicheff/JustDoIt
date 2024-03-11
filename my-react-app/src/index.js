import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {App}  from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import CategoriesPage from './pages/CategoriesPage'
import AllSalesPage from './pages/AllSalesPage'
import AllProductsPage from './pages/AllProductsPage'

const router = createBrowserRouter([
  {
    path: '/', // домашняя страница
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/categories',
        element: <CategoriesPage />,
      },
      // {
      //   path: '/users/:id',
      //   element: <SingleUserPage />,
      // },
      {
        path: '/sales',
        element: <AllSalesPage />,
      },
      {
        path: '/products',
        element: <AllProductsPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);