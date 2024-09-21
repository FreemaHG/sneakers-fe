import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/Main/Main.jsx';
import App from './App.jsx';

// описание всех роутов (страниц)
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: "/",
				element: <Main />
			},
			{
				path: "/favourites",
				element: <p>Мои закладки</p>
			},
			{
				path: "/orders",
				element: <p>Мои покупки</p>
			},
		],
	},
	{
		path: '*',
		element: <p>Страница не найдена</p>
	}
])


export default router;