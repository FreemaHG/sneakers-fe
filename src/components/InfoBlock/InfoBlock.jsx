import cn from 'classnames';

import ButtonBack from '../Buttons/ButtonBack/ButtonBack.jsx';

import styles from './InfoBlock.module.scss';


/**
 * @component
 * @description Блок для вывода информации
 * @prop {function} onClose - функция для закрытия сайдбара / возврата назад
 */
const InfoBlock = ({ image, title, description, onClose, titleGreen = false }) => {
	return (
		<div className={styles['block']}>
			<img className={styles['image']} src={image} alt={title}/>
			{/* применяем стили title-green только если titleGreen === true */}
			<h3 className={cn(styles['title'], {
				[styles['title-green']]: titleGreen
			})}>{title}</h3>
			<p className={styles['description']}>{description}</p>
			<ButtonBack onClick={onClose}>Вернуться назад</ButtonBack>
		</div>
	);
};

export default InfoBlock;