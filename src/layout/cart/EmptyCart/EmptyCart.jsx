import ButtonBack from '../../../components/Buttons/ButtonBack/ButtonBack.jsx';

import styles from './EmptyCart.module.scss';

/**
 * @component
 * @description Блок с пустой корзиной
 * @prop {function} onClose - функция для закрытия сайдбара
 */
const EmptyCart = ({ onClose }) => {
	return (
		<div className={styles['empty-cart']}>
			<img className={styles['image']} src="/images/empty-cart.svg" alt="Пустая корзина"/>
			<h3 className={styles['title']}>Корзина пустая</h3>
			<p className={styles['description']}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
			<ButtonBack onClick={onClose}>Вернуться назад</ButtonBack>
		</div>
	);
};

export default EmptyCart;