import styles from '../ProductPage/ProductPage.module.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductPage() {
	const { id } = useParams();

	return (
		<div className={styles.product}>
			<h1 className={styles.title}>Product</h1>
		</div>
	);
}

export default ProductPage;
