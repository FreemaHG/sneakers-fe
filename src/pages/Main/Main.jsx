import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Title from '../../components/Title/Title.jsx';
import Search from '../../components/Search/Search.jsx';
import CardAverageSize from '../../components/Card/CardAverageSize/CardAverageSize.jsx';
import getEnvVariables from '../../helpers/envVariables.js';

import styles from './Main.module.scss';


/**
 * @component
 * @description Главная страница с товарами
 */
const Main = () => {

	// переменные окружения
	const envVariables = getEnvVariables();

	const [products, setProducts] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getProducts = async () => {
		const { data } = await axios.get(`${envVariables.BASE_URL}/products`);
		setProducts(data);
	};

	useEffect(() => {
		getProducts();
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