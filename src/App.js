import styles from './App.module.scss';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero/Hero';
import Brands from './containers/Brands';

function App() {
	return (
		<div className={styles.App}>
			<Navbar />
			<Hero />
			<Brands />
		</div>
	);
}

export default App;
