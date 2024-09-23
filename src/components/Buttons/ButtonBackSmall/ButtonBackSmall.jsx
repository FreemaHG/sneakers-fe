import { useNavigate } from 'react-router-dom';

import styles from './ButtonBackSmall.module.scss';

/**
 * @component
 * @description Маленькая кнопка для возврата назад
 * @prop {string} redirectUrl - URL для редиректа по нажатию кнопки
 */
const ButtonBackSmall = ({ redirectUrl }) => {

	const navigate = useNavigate();  // для редиректа

	return (
		<button className={styles['button-back']} onClick={() => navigate(redirectUrl)}>
			<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.5" y="0.5" width="34" height="34" rx="7.5" fill="white" stroke="#F2F2F2"/>
				<path
					d="M19 22L14 17L19 12" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

export default ButtonBackSmall;