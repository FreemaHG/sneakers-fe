import styles from './CardSmallSize.module.scss';

/**
 * @component
 * @description карточка товара маленького размера (на всплывающем сайдбаре с товарами в корзине)
 */
const CardSmallSize = () => {
	return (
		<li className={styles['cart']}>
			<img className={styles['image']} width={70} height={70} src="/images/sneakers/1.jpg" alt="Sneaker"/>
			<div className={styles['description']}>
				<p className={styles['name']}>Мужские Кроссовки Nike Air Max 270</p>
				<span className={styles['price']}>12&nbsp;999&nbsp;руб.</span>
			</div>
			<img className={styles['remove-button']} src="/images/icons/remove.svg" alt="Remove"/>
		</li>
	);
};

export default CardSmallSize;