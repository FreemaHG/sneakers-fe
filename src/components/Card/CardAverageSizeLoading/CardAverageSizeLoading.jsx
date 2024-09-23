// для отрисовки лоадеров пока нет данных о товарах
import ContentLoader from 'react-content-loader';

import styles from './CardAverageSizeLoading.module.scss';


/**
 * @component
 * @description лоадер карточки товара среднего размера
 */
const CardAverageSizeLoading = () => {
	return (
		<div className={styles['card']}>
			<ContentLoader
				speed={2}
				width={150}
				height={187}
				viewBox="0 0 150 187"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
				<rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
				<rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
				<rect x="0" y="161" rx="6" ry="6" width="80" height="24" />
				<rect x="114" y="153" rx="6" ry="6" width="32" height="32" />
			</ContentLoader>
		</div>
	);
};

export default CardAverageSizeLoading;