import { useState } from 'react';

import styles from './CardAverageSize.module.scss';

/**
 * @component
 * @description карточка товара среднего размера (на главной странице)
 * @prop {Object} props - id, название, изображение, цена товара
 */
const CardAverageSize = (props) => {

	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);

	const changeStatusToCart = () => {
		setIsAddedToCart(!isAddedToCart);
	}

	const changeStatusToFavourite = () => {
		setIsAddedToFavourite(!isAddedToFavourite)
	}

	return (
		<div className={styles['card']}>
			<img
				className={styles['favourite-icon']}
				src={isAddedToFavourite ? "/images/icons/heart-liked.svg" : "/images/icons/heart-unliked.svg"}
				alt={isAddedToFavourite ? "Удалить товар из избранного" : "Добавить товар в избранное"}
				onClick={changeStatusToFavourite}
			/>
			<img className={styles['image']} src={props.image} alt="Sneakers"/>
			<h5 className={styles['name']}>{props.name}</h5>
			<div className={styles['body']}>
				<div className={styles['price-block']}>
					<span className={styles['name']}>Цена:</span>
					<b className={styles['price']}>{props.price}&nbsp;руб.</b>
				</div>
				<img
					className={styles['button']}
					src={isAddedToCart ? "/images/icons/btn-checked.svg" : "/images/icons/btn-plus.svg"}
					alt={isAddedToCart ? "Удалить товар из корзины" : "Добавить товар в корзину"}
					onClick={changeStatusToCart}
				/>
			</div>
		</div>
	);
};

export default CardAverageSize;