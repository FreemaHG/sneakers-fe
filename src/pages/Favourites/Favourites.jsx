import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title/Title.jsx';
import CardAverageSize from '../../components/Card/CardAverageSize/CardAverageSize.jsx';
import { FavouriteContext } from '../../context/FavouriteContextProvider.jsx';
import ButtonBackSmall from '../../components/Buttons/ButtonBackSmall/ButtonBackSmall.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';

import styles from './Favourites.module.scss';


/**
 * @component
 * @description Страница с избранными товарами
 */
const Favourites = () => {

	// данные из контекста об избранных товарах
	const { favouriteProducts } = useContext(FavouriteContext);

	const navigate = useNavigate();  // для редиректа

	return (
		<main className={styles['main']}>
			{favouriteProducts.length
				? <>
					<div className={styles['header']}>
						<ButtonBackSmall redirectUrl="/"/>
						<Title>Мои закладки</Title>
					</div>
					<div className={styles['card-list']}>
						{favouriteProducts.map(product => {
							return <CardAverageSize
								key={product.id}
								product={product}
							/>;
						})}
					</div>
				</>
				: <div className={styles['not-favourite-block']}>
						<InfoBlock
							image="/images/not_favourite_smile.png"
							title="Закладок нет :("
							description="Вы ничего не добавляли в закладки"
							onClose={() => navigate('/')}
						/>
				</div>
			}
		</main>
	);
};

export default Favourites;