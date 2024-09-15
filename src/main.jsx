import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { CartContextProvider } from './context/CartContextProvider.jsx';

import './styles/styles.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      оборачиваем все приложение в кастомный компонент-провайдер,
      обеспечивая таким образом доступ к контексту всем компонентам приложения
    */}
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>
);
