import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

import Title from '../../components/Title/Title.jsx';
import Search from '../../components/Search/Search.jsx';
import CardAverageSize from '../../components/Card/CardAverageSize/CardAverageSize.jsx';
import getEnvVariables from '../../helpers/envVariables.js';
import CardAverageSizeLoading from '../../components/Card/CardAverageSizeLoading/CardAverageSizeLoading.jsx';
import { ITEMS_COUNT } from '../../contains.js';

import styles from './Main.module.scss';


/**
 * @component
 * @description Главная страница с товарами
 */
const Main = () => {

	// переменные окружения
	const envVariables = getEnvVariables();

	// товары, поисковая фраза, флаг загрузки
	const [products, setProducts] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const getProducts = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`${envVariables.BASE_URL}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (error) {
			if (error instanceof AxiosError) {
				console.error(error);
			}
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	// рендер реальных либо лоадеров карточек (в зависимости от флага загрузки товаров)
	const renderCards = () => {
		if (isLoading) {
			return [...Array(ITEMS_COUNT)].map(_ => <CardAverageSizeLoading/>);
		}
		return products
			// фильтрация товаров по частичному совпадению без учета регистра
			.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
			.map(product => {
				return <CardAverageSize
					key={product.id}
					product={product}
				/>;
			});
	};

	return (
		<main className={styles['content']}>
			<div className={styles['header']}>
				{
					searchValue
						? <p className={styles['search-title']}>Поиск по: <b>{`${searchValue}`}</b></p>
						: <Title>Все кроссовки</Title>
				}
				{!isLoading && <Search
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>}
			</div>
			<div className={styles['card-list']}>
				{renderCards()}
			</div>
		</main>
	);
};

export default Main;