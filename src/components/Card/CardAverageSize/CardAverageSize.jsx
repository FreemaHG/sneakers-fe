import styles from './CardAverageSize.module.scss';

/**
 * @component
 * @description карточка товара среднего размера (на главной странице)
 */
const CardAverageSize = () => {
	return (
		<div className={styles['card']}>
			<img className="favourite-icon" width={32} height={32} src="/images/icons/heart-unliked.svg" alt="Unliked"/>
			<img className={styles['image']} width={133} height={112} src="/images/sneakers/2.jpg" alt="Sneakers"/>
			<h5 className={styles['name']}>Мужские Кроссовки Nike Air Max 270</h5>
			<div className={styles['body']}>
				<div className={styles['price-block']}>
					<span className={styles['name']}>Цена:</span>
					<b className={styles['price']}>12&nbsp;990&nbsp;руб.</b>
				</div>
				<button className={styles['button']}>
					<img width={22} height={22} src="/images/icons/plus.svg" alt="Добавить товар в корзину"/>
				</button>
			</div>
		</div>
	);
};

export default CardAverageSize;