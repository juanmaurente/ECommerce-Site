import styles from '../ProductPage/ProductPage.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/products';

function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProductById(id)
			.then(setProduct)
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			{loading ? (
				<h1>Loading</h1>
			) : (
				<div className={styles.container}>
					<div className={styles.leftBlock}>
						<img
							className={styles.image}
							src={product.thumbnail}
							alt={product.title}
						/>
					</div>
					<div className={styles.rightBlock}>
						<h1 className={styles.title}>{product.title}</h1>
						<h2 className={styles.price}>${product.price}</h2>
						<p>{product.description}</p>
						<button className={styles.buttons_Add}>
							Add To Cart
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default ProductPage;
