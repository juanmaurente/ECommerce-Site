import styles from '../Product/Product.module.scss';

function Product({ id, title, thumbnail, brand, description, price }) {
	return (
		<div className={styles.product}>
			<img
				src={thumbnail}
				className={styles.product_img}
				alt={description}
			/>
			<div className={styles.product_info}>
				<h5 className={styles.product_title}>{title}</h5>
				<h5 className={styles.product_price}>${price}</h5>
			</div>
		</div>
	);
}

export default Product;
