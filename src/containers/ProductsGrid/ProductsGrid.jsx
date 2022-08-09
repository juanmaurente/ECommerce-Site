import styles from '../ProductsGrid/ProductsGrid.module.scss';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../services/products';
import { useEffect, useState } from 'react';

function ProductsGrid() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const wrapper = async () => {
			const products = await getProducts();
			setProducts(products);
		};

		wrapper();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.ProductsGallery}>
				{products
					.sort((a, b) => {
						return a.category - b.category;
					})
					.map((product) => {
						return (
							<ProductCard key={product.id} product={product} />
						);
					})}
			</div>
		</div>
	);
}

export default ProductsGrid;
