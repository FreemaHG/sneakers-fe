import { createContext, useReducer, useState } from 'react';

// контекст с данными о товарах в корзине
export const CartContext = createContext({
	productsInCart: [],
});

// кастомный компонент-провайдер, принимает дочерние компоненты, пробрасывая в них состояния с данными контекста
export const CartContextProvider = ({ children }) => {
	// состояние для работы и удобного обновления данных о товарах в контексте
	// при обновлении состояния внутри контекста все компоненты, использующие данное состояние, автоматически перерисуются
	// const [productsInCart, setProductsInCart] = useState([]);

	const [productsInCart, dispatchCart] = useReducer(cartReducer, []);

	// оборачиваем переданный компонент в провайдер, чтобы все дочерние компоненты children имели в своей области видимости данные из контекста
	// Provider требует явной проброски внутрь себя значения из контекста внутри value - products
	// вторым аргументом можно передать функцию для изменения этого значения - setProducts
	return <CartContext.Provider value={{ productsInCart, dispatchCart }}>
		{children}
	</CartContext.Provider>;
};

// функция-обработчик для обновления данных о товарах в корзине
// ВАЖНО: функция принимает данные, изменяет из в зависимости от входных параметров
// и возвращает, не переписывая значение в контексте
// state - изначальное состояние
// action - то, что нужно сделать, имеет дополнительные данные в payload
export function cartReducer(state, action) {
	// добавление и удаление товара из корзины в зависимости от переданного ключа
	switch (action.type) {
		// добавление товара в корзину
		case "ADD":
			// возвращаем старое состояние с товарами + в конце новый добавленный товар
			return [...state, action.product];
		// удаление товара из корзины
		case "DELETE":
			// возвращаем массив с товарами, чьи id не равны переданному
			return state.filter(product => product !== action.product);
		// возврат значения без изменений, если никакое из условий не подошло
		default:
			return state;
	}
}