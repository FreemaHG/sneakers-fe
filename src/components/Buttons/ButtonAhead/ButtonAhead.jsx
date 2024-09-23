import StandardButton from '../StandardButton/StandardButton.jsx';

import styles from './ButtonAhead.module.scss';

/**
 * @component
 * @description Кнопка вперед
 * @prop {component} children - содержимое кнопки
 */
const ButtonAhead = ({ children }) => {
	return (
		<StandardButton className={styles['btn-ahead']}>
			{children}
			<img src="/images/icons/arrow-right.svg" alt="Arrow right"/>
		</StandardButton>
	);
};

export default ButtonAhead;