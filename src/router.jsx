import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/Main/Main.jsx';
import App from './App.jsx';
import Favourites from './pages/Favourites/Favourites.jsx';
import Orders from './pages/Orders/Orders.jsx';

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
				element: <Orders />
			},
		],
	},
	{
		path: '*',
		element: <p>Страница не найдена</p>
	}
])


export default router;