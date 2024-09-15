import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Title from '../../components/Title/Title.jsx';
import Search from '../../components/Search/Search.jsx';
import CardAverageSize from '../../components/Card/CardAverageSize/CardAverageSize.jsx';
import { apiUrl } from '../../helpers/constants.js';

import styles from './Main.module.scss';


/**
 * @component
 * @description Главная страница с товарами
 */
const Main = () => {

	const [products, setProducts] = useState([]);

	const getProduct = async () => {
		const { data } = await axios.get(apiUrl);
		setProducts(data);
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<main className={styles['content']}>
			<div className={styles['header']}>
				<Title>Все кроссовки</Title>
				<Search/>
			</div>
			<div className={styles['card-list']}>
				{products.map(product => {
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