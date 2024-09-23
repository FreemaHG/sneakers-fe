import React from 'react';
import cn from 'classnames';

import styles from './StandardButton.module.scss';

/**
 * @component
 * @description Кнопка
 * @prop {component} children - содержимое кнопки
 * @prop {Object} className - дополнительные стили
 * @prop {function} onClick - функция, вызывающая действие, необходимое при клике по кнопке
 */
const StandardButton = ({ children, className, onClick }) => {
	return (
		<button className={cn(styles['button'], className)} onClick={onClick}>
			{children}
		</button>
	);
};

export default StandardButton;