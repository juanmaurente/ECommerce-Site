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
				<div>
					<h1>{product.title}</h1>
					<h2>${product.price}</h2>
					<img src={product.thumbnail} alt={product.title} />
					<p>{product.description}</p>
				</div>
			)}
		</>
	);
}

export default ProductPage;
