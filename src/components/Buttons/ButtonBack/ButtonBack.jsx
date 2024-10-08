import StandardButton from '../StandardButton/StandardButton.jsx';

import styles from './ButtonBack.module.scss';

/**
 * @component
 * @description Кнопка назад
 * @prop {component} children - содержимое кнопки
 * @prop {function} onClick - функция для закрытия садбара / возврата на главную страницу
 */
const ButtonBack = ({ children, onClick }) => {
	return (
		<StandardButton className={styles['btn-back']} onClick={onClick}>
			{children}
			<img src="/images/icons/arrow-right.svg" alt="Arrow back"/>
		</StandardButton>
	);
};

export default ButtonBack;