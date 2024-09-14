import styles from './CardAverageSize.module.scss';

/**
 * @component
 * @description карточка товара среднего размера (на главной странице)
 * @prop {Object} props - id, название, изображение, цена товара
 */
const CardAverageSize = (props) => {

	const addToCart = (event) => {
		alert(`Товар "${props.name}" добавлен в корзину`)
	}

	const addToFavourite = () => {
		alert(`Товар "${props.name}" добавлен в избранное`)
	}

	return (
		<div className={styles['card']}>
			<img
				className={styles['favourite-icon']} width={32} height={32} src="/images/icons/heart-unliked.svg"
				alt="Unliked"
				onClick={addToFavourite}
			/>
			<img className={styles['image']} width={133} height={112} src={props.image} alt="Sneakers"/>
			<h5 className={styles['name']}>{props.name}</h5>
			<div className={styles['body']}>
				<div className={styles['price-block']}>
					<span className={styles['name']}>Цена:</span>
					<b className={styles['price']}>{props.price}&nbsp;руб.</b>
				</div>
				<button className={styles['button']} onClick={addToCart}>
					<img width={22} height={22} src="/images/icons/plus.svg" alt="Добавить товар в корзину"/>
				</button>
			</div>
		</div>
	);
};

export default CardAverageSize;