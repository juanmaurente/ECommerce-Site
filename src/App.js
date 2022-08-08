import styles from './App.module.scss';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero/Hero';
import About from './containers/About/About';
import ProductPage from './containers/ProductPage';
import Brands from './containers/Brands';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<div className={styles.App}>
							<Hero />
							<Brands />
							<ProductsGrid products={products} />
						</div>
					}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/products' element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
