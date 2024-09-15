import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import PopUpSidebar from './components/PopUpSidebar/PopUpSidebar.jsx';
import Main from './pages/Main/Main.jsx';


function App() {

	// флаг для открытия и закрытия сайдбара
	const [openSidebar, setOpenSidebar] = useState(false);

	const closeSidebar = () => setOpenSidebar(false);

	return (
		<div className="wrapper">
			{openSidebar && <PopUpSidebar onClose={closeSidebar} />}
			<Header openSidebar={setOpenSidebar} />
			<Main />
		</div>
	);
}

export default App;