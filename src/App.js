import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import MainContainer from './components/Layout/MainContainer';
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
