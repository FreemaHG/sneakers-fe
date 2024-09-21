import { useContext } from 'react';

import { CartContext } from '../../context/CartContextProvider.jsx';
import FullCart from '../../layout/cart/FullCart/FullCart.jsx';

import styles from './PopUpSidebar.module.scss';
import EmptyCart from '../../layout/cart/EmptyCart/EmptyCart.jsx';


/**
 * @component
 * @description Сайдбар с товарами в корзине
 * @prop {function} onClose - функция для закрытия сайдбара
 */
const PopUpSidebar = ({ onClose }) => {

	// получаем данные из контекста о товарах в корзине
	const { productsInCart } = useContext(CartContext);

	return (
		<div className={styles['overlay']} onClick={onClose}>
			{/* event.stopPropagation() останавливаем действие при клике по самому сайдбару (чтобы сайдбар не закрывался) */}
			<div className={styles['sidebar']} onClick={event => event.stopPropagation()}>
				<div className={styles['header']}>
					<h2 className={styles['title']}>Корзина</h2>
					<img
						className={styles['remove-button']}
						src="/images/icons/remove.svg"
						alt="Закрыть корзину"
						onClick={() => onClose()}
					/>
				</div>
				<div className={styles['body']}>
					{productsInCart.length
						? <FullCart />
						: <EmptyCart onClose={onClose} />
					}
				</div>
			</div>
		</div>
	);
};

export default PopUpSidebar;