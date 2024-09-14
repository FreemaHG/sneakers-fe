import Header from './components/Header/Header.jsx';
import PopUpSidebar from './components/PopUpSidebar/PopUpSidebar.jsx';
import Main from './pages/Main/Main.jsx';


function App() {
	return (
		<div className="wrapper">
			<PopUpSidebar />
			<Header />
			<Main />
		</div>
	);
}

export default App;