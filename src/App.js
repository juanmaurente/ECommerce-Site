import styles from './App.module.scss';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero/Hero';

function App() {
	return (
		<div className={styles.App}>
			<Navbar />
			<Hero />
		</div>
	);
}

export default App;
