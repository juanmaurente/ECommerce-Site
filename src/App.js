import styles from './App.module.scss';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero/Hero';
import Brands from './containers/Brands';
import { useEffect, useState } from 'react';
import { getProducts } from './services/products';
import ProductsGrid from './containers/ProductsGrid/ProductsGrid';

function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const wrapper = async () => {
			const products = await getProducts();
			setProducts(products);
		};

		wrapper();
	}, []);

	return (
		<div className={styles.App}>
			<Navbar />
			<Hero />
			<Brands />
			<ProductsGrid products={products} />
		</div>
	);
}

export default App;
