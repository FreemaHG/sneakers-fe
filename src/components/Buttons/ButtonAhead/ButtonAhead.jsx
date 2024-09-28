import StandardButton from '../StandardButton/StandardButton.jsx';

import styles from './ButtonAhead.module.scss';


/**
 * @component
 * @description Кнопка вперед
 * @prop {component} children - содержимое кнопки
 * @prop {function} onClick - функция для оформления заказа
 * @prop {boolean} disabled - флаг для блокировки кнопки
 */
const ButtonAhead = ({ children, onClick, disabled }) => {
	return (
		<StandardButton className={styles['btn-ahead']} onClick={onClick} disabled={disabled}>
			{children}
			<img src="/images/icons/arrow-right.svg" alt="Arrow right"/>
		</StandardButton>
	);
};

export default ButtonAhead;