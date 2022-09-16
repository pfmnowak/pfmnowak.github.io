import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import MainContainer from './components/Layout/MainContainer/MainContainer';
import ScrollTopButton from './components/UI/ScrollTopButton';

function App() {
	return (
		<div className="App">
			<Header />
			<MainContainer />
			<Footer />
			<ScrollTopButton />
		</div>
	);
}

export default App;
