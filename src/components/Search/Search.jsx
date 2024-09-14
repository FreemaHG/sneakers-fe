import styles from './Search.module.scss';

/**
 * @component
 * @description Инпут для ввода текста для поиска товаров
 */
const Search = () => {
	return (
		<div className={styles['block']}>
			<img width={16} height={16} src="/images/icons/search.svg" alt="Search"/>
			<input type="text" placeholder="Поиск..."/>
		</div>
	);
};

export default Search;