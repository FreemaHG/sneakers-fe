import { createContext, useReducer } from 'react';

// контекст с данными о товарах в избранном
export const FavouriteContext = createContext({
	favouriteProducts: [],
});

// кастомный компонент-провайдер, принимает дочерние компоненты, пробрасывая в них состояния с данными контекста
export const FavouriteContextProvider = ({ children }) => {

	// редюсер возвращает состояние с товарами и функцию для его изменения
	const [favouriteProducts, dispatchFavourite] = useReducer(favouriteReducer, []);

	// оборачиваем переданный компонент в провайдер, чтобы все дочерние компоненты children имели в своей области видимости данные из контекста
	// Provider требует явной проброски внутрь себя значения из контекста внутри value - favouriteProducts
	// вторым аргументом можно передать функцию для изменения этого значения - dispatchFavourite
	return <FavouriteContext.Provider value={{ favouriteProducts, dispatchFavourite }}>
		{children}
	</FavouriteContext.Provider>;
};

// функция-обработчик для обновления данных о товарах в избранном
// ВАЖНО: функция принимает данные, изменяет из в зависимости от входных параметров
// и возвращает, не переписывая значение в контексте
// state - изначальное состояние
// action - то, что нужно сделать, имеет дополнительные данные в payload
export function favouriteReducer(state, action) {
	// различные действия с состоянием в зависимости от переданного ключа
	switch (action.type) {
		// наполнение массива товарами
		case "CREATE":
			// возвращаем все переданные товары
			return action.products;
		// добавление товара в избранное
		case "ADD":
			// возвращаем старое состояние с товарами + в конце новый добавленный товар
			return [...state, action.product];
		// удаление товара из избранного
		case "DELETE":
			// возвращаем массив с товарами, чьи id не равны переданному
			return state.filter(product => product.id !== action.id);
		// возврат значения без изменений, если никакое из условий не подошло
		default:
			return state;
	}
}