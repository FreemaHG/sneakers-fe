import React, { useContext } from 'react';

import Title from '../../components/Title/Title.jsx';
import CardAverageSize from '../../components/Card/CardAverageSize/CardAverageSize.jsx';
import { FavouriteContext } from '../../context/FavouriteContextProvider.jsx';

import styles from './Favourites.module.scss';
import ButtonBackSmall from '../../components/Buttons/ButtonBackSmall/ButtonBackSmall.jsx';
import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack.jsx';
import { useNavigate } from 'react-router-dom';


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
						<img className={styles['image']} src="/images/not_favourite_smile.png" alt="Нет закладок"/>
						<h2 className={styles['title']}>Закладок нет :(</h2>
						<p className={styles['description']}>Вы ничего не добавляли в закладки</p>
						<ButtonBack onClick={() => navigate('/')}>Вернуться назад</ButtonBack>
				</div>
			}
		</main>
	);
};

export default Favourites;