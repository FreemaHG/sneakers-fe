import cn from 'classnames';

import CardSmallSize from '../Card/CardSmallSize/CardSmallSize.jsx';

import styles from './PopUpSidebar.module.scss';


/**
 * @component
 * @description Всплывающее меню с товарами
 * @prop {function} openSidebar - смена флага для вывода сайдбара
 */
const PopUpSidebar = ({ openSidebar }) => {

	return (
		<div className={styles['overlay']}>
			<div className={styles['sidebar']}>
				<div className={styles['header-block']}>
					<h2 className={styles['title']}>Корзина</h2>
					<img
						className={styles['remove-button']}
						src="/images/icons/remove.svg"
						alt="Закрыть корзину"
						onClick={() => openSidebar(false)}
					/>
				</div>
				<ul className={styles['card-list']}>
					<CardSmallSize/>
				</ul>
				<div className={styles['register-order-block']}>
					<div className={styles['price-block']}>
						<p className={styles['text']}>Итого:</p>
						<div className={styles['border-bottom']}></div>
						<p className={styles['price']}>21 498 руб.</p>
					</div>
					<div className={styles['price-block']}>
						<p className={styles['text']}>Налог 5%:</p>
						<div className={styles['border-bottom']}></div>
						<p className={styles['price']}>1074 руб.</p>
					</div>
					<button className={cn(styles['button'], styles['btn-ahead'])}>
						Оформить заказ
						<img src="/images/icons/arrow-right.svg" alt="Arrow right"/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PopUpSidebar;