import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/Main/Main.jsx';
import App from './App.jsx';
import Favourites from './pages/Favourites/Favourites.jsx';

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
				element: <Favourites />
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