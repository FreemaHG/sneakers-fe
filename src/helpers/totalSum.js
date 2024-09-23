// возврат общей суммы переданных товаров
export const getTotalSum = (products) => {

	// перебираем товары, возвращаем стоимость, через reduce складываем все суммы
	const totalSum = products.map(product => {
		return Number(product.price);
	}).reduce((acc, i) => acc += i, 0);

	// возвращаем с двумя знаками после запятой и пробелами между разрядами
	return totalSum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}