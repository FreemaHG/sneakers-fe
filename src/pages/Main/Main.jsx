import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Title from '../../components/Title/Title.jsx';
import Search from '../../components/Search/Search.jsx';
import CardAverageSize from '../../components/Card/CardAverageSize/CardAverageSize.jsx';

import styles from './Main.module.scss';
import { CartContext } from '../../context/CartContextProvider.jsx';
import getEnvVariables from '../../helpers/envVariables.js';
import { FavouriteContext } from '../../context/FavouriteContextProvider.jsx';


/**
 * @component
 * @description Главная страница с товарами
 */
const Main = () => {

	const [products, setProducts] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	// переменные окружения
	const envVariables = getEnvVariables();

	// данные из контекста о товарах в корзине и избранных товарах
	const { dispatchCart } = useContext(CartContext);
	const { dispatchFavourite } = useContext(FavouriteContext);

	const getProducts = async () => {
		const { data } = await axios.get(`${envVariables.BASE_URL}/products`);
		setProducts(data);
	};

	const getProductsInCart = async () => {
		const { data } = await axios.get(`${envVariables.BASE_URL}/cart`);
		dispatchCart({ type: 'CREATE', products: data });
	};

	const getFavouriteProducts = async () => {
		const { data } = await axios.get(`${envVariables.BASE_URL}/favourite`);
		dispatchFavourite({ type: 'CREATE', products: data });
	};

	useEffect(() => {
		getProducts();
		getProductsInCart();
		getFavouriteProducts();
	}, []);

	return (
		<main className={styles['content']}>
			<div className={styles['header']}>
				{
					searchValue
						? <p className={styles['search-title']}>Поиск по: <b>{`${searchValue}`}</b></p>
						: <Title>Все кроссовки</Title>
				}
				<Search
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</div>
			<div className={styles['card-list']}>
				{products
					// фильтрация товаров по частичному совпадению без учета регистра
					.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
					.map(product => {
						return <CardAverageSize
							key={product.id}
							product={product}
						/>;
					})}
			</div>
		</main>
	);
};

export default Main;