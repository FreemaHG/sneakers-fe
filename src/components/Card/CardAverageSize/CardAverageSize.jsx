import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { CartContext } from '../../../context/CartContextProvider.jsx';

import styles from './CardAverageSize.module.scss';
import getEnvVariables from '../../../helpers/envVariables.js';
import { FavouriteContext } from '../../../context/FavouriteContextProvider.jsx';

/**
 * @component
 * @description карточка товара среднего размера (на главной странице)
 * @prop {Object} product - объект товара
 */
const CardAverageSize = ({ product }) => {

	// флаги для отметки, что товар в корзине или избранном
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);

	const envVariables = getEnvVariables();

	// товары в корзине и избранные товары + функции для передачи действия в редюсер для изменения данных в контексте
	const { productsInCart, dispatchCart } = useContext(CartContext);
	const { favouriteProducts, dispatchFavourite } = useContext(FavouriteContext);

	// проверка и смена иконки при изменении товаров в корзине
	useEffect(() => {
		const res = productsInCart.find(i => i.id === product.id);

		if (res && !isAddedToCart) {
			setIsAddedToCart(true);
		}
		if (!res && isAddedToCart) {
			setIsAddedToCart(false);
		}
	}, [productsInCart]);

	// проверка и смена иконки при изменении товаров в избранном
	useEffect(() => {
		const res = favouriteProducts.find(i => i.id === product.id);

		if (res && !isAddedToFavourite) {
			setIsAddedToFavourite(true);
		}
		if (!res && isAddedToFavourite) {
			setIsAddedToFavourite(false);
		}
	}, [favouriteProducts]);

	const changeStatusToCart = async () => {
		// удаление товара из корзины
		if (isAddedToCart) {
			await axios.delete(`${envVariables.BASE_URL}/cart/${product.id}`);
			dispatchCart({ type: 'DELETE', id: product.id });
			// добавление товара в корзину
		} else {
			const { data } = await axios.post(`${envVariables.BASE_URL}/cart`, { id: product.id });
			dispatchCart({ type: 'ADD', product: data });  // изменение состояния в хранилище
		}
		setIsAddedToCart(!isAddedToCart);
	};

	const changeStatusToFavourite = async () => {
		// удаление товара из избранного
		if (isAddedToFavourite) {
			await axios.delete(`${envVariables.BASE_URL}/favourite/${product.id}`);
			dispatchFavourite({ type: 'DELETE', id: product.id });
			// добавление товара в избранное
		} else {
			const { data } = await axios.post(`${envVariables.BASE_URL}/favourite`, { id: product.id });
			dispatchFavourite({ type: 'ADD', product: data });  // изменение состояния в хранилище
		}
		setIsAddedToFavourite(!isAddedToFavourite);
	};

	return (
		<div className={styles['card']}>
			<img
				className={styles['favourite-icon']}
				src={isAddedToFavourite ? '/images/icons/heart-liked.svg' : '/images/icons/heart-unliked.svg'}
				alt={isAddedToFavourite ? 'Удалить товар из избранного' : 'Добавить товар в избранное'}
				onClick={changeStatusToFavourite}
			/>
			<img className={styles['image']} src={product.image} alt="Sneakers"/>
			<h5 className={styles['title']}>{product.title}</h5>
			<div className={styles['body']}>
				<div className={styles['price-block']}>
					<span className={styles['name']}>Цена:</span>
					<b className={styles['price']}>{product.price}&nbsp;руб.</b>
				</div>
				<img
					className={styles['button']}
					src={isAddedToCart ? '/images/icons/btn-checked.svg' : '/images/icons/btn-plus.svg'}
					alt={isAddedToCart ? 'Удалить товар из корзины' : 'Добавить товар в корзину'}
					onClick={changeStatusToCart}
				/>
			</div>
		</div>
	);
};

export default CardAverageSize;