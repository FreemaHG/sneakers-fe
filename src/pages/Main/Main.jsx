import React from 'react';

import Title from '../../components/Title/Title.jsx';
import Search from '../../components/Search/Search.jsx';
import CardAverageSize from '../../components/Card/CardAverageSize/CardAverageSize.jsx';
import { sneakers } from '../../helpers/constants.js';

import styles from './Main.module.scss';


/**
 * @component
 * @description Главная страница с товарами
 */
const Main = () => {
	return (
		<main className={styles['content']}>
			<div className={styles['header']}>
				<Title>Все кроссовки</Title>
				<Search/>
			</div>
			<div className={styles['card-list']}>
				{
					sneakers.map(sneaker => {
						return <CardAverageSize key={sneaker.id} {...sneaker} />;
					})
				}
			</div>
		</main>
	);
};

export default Main;