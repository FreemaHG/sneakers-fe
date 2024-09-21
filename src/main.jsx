import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import { CartContextProvider } from './context/CartContextProvider.jsx';
import { FavouriteContextProvider } from './context/FavouriteContextProvider.jsx';
import router from './router.jsx';

import './styles/styles.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      оборачиваем все приложение в кастомный компонент-провайдер,
      обеспечивая таким образом доступ к контексту всем компонентам приложения
    */}
    <CartContextProvider>
      <FavouriteContextProvider>
        {/*
          Подключаем роутинг.
          Корневой компонент App внутри router для главной страницы, т.к. шапка есть на всех страницах.
          Дочерние компоненты сменяют друг друга в зависимости от URL
        */}
        <RouterProvider router={router}/>
      </FavouriteContextProvider>
    </CartContextProvider>
  </StrictMode>
);
