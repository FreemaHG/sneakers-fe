import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

import Title from '../../components/Title/Title.jsx';
import CardAverageSize from '../../components/Card/CardAverageSize/CardAverageSize.jsx';
import ButtonBackSmall from '../../components/Buttons/ButtonBackSmall/ButtonBackSmall.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import getEnvVariables from '../../helpers/envVariables.js';

import styles from './Orders.module.scss';
import getOrderProducts from '../../helpers/orderProducts.js';

/**
 * @component
 * @description Страница с оформленными заказами
 */
const Orders = () => {

	// переменные окружения
	const envVariables = getEnvVariables();

	const navigate = useNavigate();  // для редиректа

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getProducts = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`${envVariables.BASE_URL}/orders`);
			setProducts(getOrderProducts(data));
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

	return (
		<main className={styles['main']}>
			{products.length
				? <>
					<div className={styles['header']}>
						<ButtonBackSmall redirectUrl="/"/>
						<Title>Мои покупки</Title>
					</div>
					<div className={styles['card-list']}>
						{products.map(product => {
							return <CardAverageSize
								key={product.id}
								product={product}
							/>;
						})}
					</div>
				</>
				: <div className={styles['not-favourite-block']}>
					<InfoBlock
						image="/images/empty-orders.png"
						title="У вас нет заказов"
						description="Оформите хотя бы один заказ."
						onClose={() => navigate('/')}
					/>
				</div>
			}
		</main>
	);
};

export default Orders;