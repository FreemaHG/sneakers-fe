import styles from './Search.module.scss';

/**
 * @component
 * @description Инпут для ввода текста для поиска товаров
 * @prop {string} searchValue - строка в инпуте
 * @prop {function} setSearchValue - функция для обновления состояния с текстом для фильтрации товаров
 */
const Search = ({ searchValue, setSearchValue }) => {

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className={styles['block']}>
			<img width={16} height={16} src="/images/icons/search.svg" alt="Search"/>
			<input type="text" value={searchValue} placeholder="Поиск..." onChange={onChangeSearchValue}/>
			{searchValue && <img
				className={styles['remove-icon']}
				src="/images/icons/remove.svg"
				alt="Очистить поиск"
				onClick={() => setSearchValue('')}
			/>}
		</div>
	);
};

export default Search;