import { useContext, useEffect, useState } from 'react';

import styles from './CardAverageSize.module.scss';
import { CartContext } from '../../../context/CartContextProvider.jsx';

/**
 * @component
 * @description карточка товара среднего размера (на главной странице)
 * @prop {Object} product - объект товара
 */
const CardAverageSize = ({ product }) => {

	// флаги для отметки, что товар в корзине или избранном
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);

	// товары в корзине и функция для передачи действия в редюсер для изменения данных о товарах в корзине в контексте
	const { productsInCart, dispatchCart } = useContext(CartContext);

	// проверка и смена иконки при изменении товаров в корзине
	useEffect(() => {
		const res = productsInCart.includes(product)

		if (res && !isAddedToCart) {
			setIsAddedToCart(true);
		}
		if (!res && isAddedToCart) {
			setIsAddedToCart(false);
		}
	}, [productsInCart]);

	const changeStatusToCart = () => {
		// удаление товара из корзины
		if (isAddedToCart) {
			dispatchCart({ type: 'DELETE', product: product });
			// добавление товара в корзину
		} else {
			dispatchCart({ type: 'ADD', product: product });
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
			<h5 className={styles['name']}>{product.name}</h5>
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