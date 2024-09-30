// возврат уникальных товаров из всех переданных заказов
const getOrderProducts = (orders) => {
	const allProducts = orders.map(order => order.products);
	const products = allProducts.flat(Infinity);  // Убираем вложенные массивы

	let uniqueProductsId = [];
	let uniqueProducts = [];

	products.map(product => {
		if (!uniqueProductsId.includes(product.id)) {
			uniqueProducts.push(product);
			uniqueProductsId.push(product.id);
		}
	});

	return uniqueProducts;
};

export default getOrderProducts;