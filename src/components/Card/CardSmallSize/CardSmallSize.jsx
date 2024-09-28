import { useContext } from 'react';

import { CartContext } from '../../../context/CartContextProvider.jsx';

import styles from './CardSmallSize.module.scss';
import getEnvVariables from '../../../helpers/envVariables.js';
import axios from 'axios';
import { formattedNumber } from '../../../helpers/price.js';

/**
 * @component
 * @description карточка товара маленького размера (на всплывающем сайдбаре с товарами в корзине)
 * @prop {Object} product - объект товара
 */
const CardSmallSize = ({ product }) => {

	// функция для передачи действия в редюсер для изменения данных о товарах в корзине в контексте
	const { dispatchCart } = useContext(CartContext);

	const envVariables = getEnvVariables();

	const deleteProduct = async () => {
		await axios.delete(`${envVariables.BASE_URL}/cart/${product.id}`);
		dispatchCart({ type: "DELETE", id: product.id });
	};

	return (
		<li className={styles['cart']}>
			<img className={styles['image']} width={70} height={70} src={product.image} alt="Sneaker"/>
			<div className={styles['description']}>
				<p className={styles['title']}>{product.title}</p>
				<span className={styles['price']}>{formattedNumber(Number(product.price))}&nbsp;руб.</span>
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