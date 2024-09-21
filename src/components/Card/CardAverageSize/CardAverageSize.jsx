import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { CartContext } from '../../../context/CartContextProvider.jsx';

import styles from './CardAverageSize.module.scss';
import getEnvVariables from '../../../helpers/envVariables.js';

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

	// товары в корзине и функция для передачи действия в редюсер для изменения данных о товарах в корзине в контексте
	const { productsInCart, dispatchCart } = useContext(CartContext);

	// проверка и смена иконки при изменении товаров в корзине
	useEffect(() => {
		const res = productsInCart.find(i => i.product_id === product.id);

		if (res && !isAddedToCart) {
			setIsAddedToCart(true);
		}
		if (!res && isAddedToCart) {
			setIsAddedToCart(false);
		}
	}, [productsInCart]);

	const changeStatusToCart = async () => {
		// удаление товара из корзины
		if (isAddedToCart) {
			await axios.delete(`${envVariables.BASE_URL}/cart/${product.id}`);
			// TODO Менять состояние только после успешного ответа!!!
			dispatchCart({ type: 'DELETE', product_id: product.id });
			// добавление товара в корзину
		} else {
			// отправка данных на бэк
			const { data } = await axios.post(`${envVariables.BASE_URL}/cart`, { product_id: product.id });
			// TODO Менять состояние только после успешного ответа!!!
			dispatchCart({ type: 'ADD', product: data });  // изменение состояния в хранилище
		}
		setIsAddedToCart(!isAddedToCart);
	};

	const changeStatusToFavourite = () => {
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