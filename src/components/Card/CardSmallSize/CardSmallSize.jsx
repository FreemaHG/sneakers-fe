import styles from './CardSmallSize.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContextProvider.jsx';

/**
 * @component
 * @description карточка товара маленького размера (на всплывающем сайдбаре с товарами в корзине)
 * @prop {Object} product - объект товара
 */
const CardSmallSize = ({ product }) => {

	// функция для передачи действия в редюсер для изменения данных о товарах в корзине в контексте
	const { dispatchCart } = useContext(CartContext);

	const deleteProduct = () => {
		dispatchCart({ type: "DELETE", product: product });
	};

	return (
		<li className={styles['cart']}>
			<img className={styles['image']} width={70} height={70} src={product.image} alt="Sneaker"/>
			<div className={styles['description']}>
				<p className={styles['name']}>{product.name}</p>
				<span className={styles['price']}>{product.price}&nbsp;руб.</span>
			</div>
			<img
				className={styles['remove-button']}
				src="/images/icons/remove.svg"
				alt="Remove"
				onClick={deleteProduct}
			/>
		</li>
	);
};

export default CardSmallSize;