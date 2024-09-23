import { useContext } from 'react';

import { CartContext } from '../../../context/CartContextProvider.jsx';
import CardSmallSize from '../../../components/Card/CardSmallSize/CardSmallSize.jsx';
import ButtonAhead from '../../../components/Button/ButtonAhead/ButtonAhead.jsx';
import { getTotalSum } from '../../../helpers/totalSum.js';

import styles from './FullCart.module.scss';


/**
 * @component
 * @description Блок с товарами корзины
 */
const FullCart = () => {

	// получаем данные из контекста о товарах в корзине
	const { productsInCart } = useContext(CartContext);

	return (
		<>
			<ul className={styles['card-list']}>
				{productsInCart.map(product => {
					return <CardSmallSize
						key={product.id}
						product={product}
					/>;
				})}
			</ul>
			<div className={styles['register-order-block']}>
				<div className={styles['price-block']}>
					<p className={styles['text']}>Итого:</p>
					<div className={styles['border-bottom']}></div>
					<p className={styles['price']}>{getTotalSum(productsInCart)}&nbsp;руб.</p>
				</div>
				<div className={styles['price-block']}>
					<p className={styles['text']}>Доставка:</p>
					<div className={styles['border-bottom']}></div>
					<p className={styles['price']}>500.00 руб.</p>
				</div>
				<ButtonAhead>Оформить заказ</ButtonAhead>
			</div>
		</>
	);
};

export default FullCart;