import React from 'react';
import cn from 'classnames';

import styles from './StandardButton.module.scss';

/**
 * @component
 * @description Кнопка
 * @prop {component} children - содержимое кнопки
 * @prop {Object} className - дополнительные стили
 * @prop {function} onClick - функция закрытия сайдбара / возврата на главную / оформления заказа
 * @prop {boolean} disabled - флаг для блокировки кнопки
 */
const StandardButton = ({ children, className, onClick, disabled }) => {
	return (
		<button className={cn(styles['button'], className)} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default StandardButton;