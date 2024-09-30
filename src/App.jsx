import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header/Header.jsx';
import PopUpSidebar from './layout/PopUpSidebar/PopUpSidebar.jsx';
import { CartContext } from './context/CartContextProvider.jsx';
import { FavouriteContext } from './context/FavouriteContextProvider.jsx';
import getEnvVariables from './helpers/envVariables.js';


function App() {

	// переменные окружения
	const envVariables = getEnvVariables();

	// флаг для открытия и закрытия сайдбара
	const [visibleSidebar, setVisibleSidebar] = useState(false);

	// данные из контекста о товарах в корзине и избранных товарах
	const { dispatchCart } = useContext(CartContext);
	const { dispatchFavourite } = useContext(FavouriteContext);

	const getProductsInCart = async () => {
		const { data } = await axios.get(`${envVariables.BASE_URL}/cart`);
		dispatchCart({ type: 'CREATE', products: data });
	};

	const getFavouriteProducts = async () => {
		const { data } = await axios.get(`${envVariables.BASE_URL}/favourite`);
		dispatchFavourite({ type: 'CREATE', products: data });
	};

	useEffect(() => {
		getProductsInCart();
		getFavouriteProducts();
	}, []);

	return (
		<div className="wrapper">
			<PopUpSidebar visibleSidebar={visibleSidebar} onClose={() => setVisibleSidebar(false)} />
			<Header openSidebar={setVisibleSidebar} />
			<div className="container container--pb60">
				{/* вместо Outlet будут подставляться компоненты, вызываемые роутом по соответствующим URL */}
				<Outlet/>
			</div>
		</div>
	);
}

export default App;