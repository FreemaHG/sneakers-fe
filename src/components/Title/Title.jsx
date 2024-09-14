/**
 * @component
 * @description Заголовок H1 для разных страниц
 * @prop {Object} children - текст заголовка
 */
const Title = ({ children }) => {
	return (
		<h1 className="title">{children}</h1>
	);
};

export default Title;