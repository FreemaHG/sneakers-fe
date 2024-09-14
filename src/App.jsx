import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import PopUpSidebar from './components/PopUpSidebar/PopUpSidebar.jsx';
import Main from './pages/Main/Main.jsx';


function App() {

	const [openSidebar, setOpenSidebar] = useState(false);

	return (
		<div className="wrapper">
			{openSidebar && <PopUpSidebar openSidebar={setOpenSidebar} />}
			<Header openSidebar={setOpenSidebar} />
			<Main />
		</div>
	);
}

export default App;