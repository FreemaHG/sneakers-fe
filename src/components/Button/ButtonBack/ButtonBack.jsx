import StandardButton from '../StandardButton/StandardButton.jsx';

import styles from './ButtonBack.module.scss';

/**
 * @component
 * @description Кнопка назад
 * @prop {component} children - содержимое кнопки
 * @prop {function} onClose - функция для закрытия сайдбара
 */
const ButtonBack = ({ children, onClose }) => {
	return (
		<StandardButton className={styles['btn-back']} onClick={onClose}>
			{children}
			<img src="/images/icons/arrow-right.svg" alt="Arrow back"/>
		</StandardButton>
	);
};

export default ButtonBack;