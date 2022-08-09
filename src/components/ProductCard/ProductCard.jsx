import styles from '../ProductCard/ProductCard.module.scss';
import { NavLink } from 'react-router-dom';

function ProductCard(props) {
	const { product } = props;
	return (
		<div className={styles.product}>
			<img
				src={product.thumbnail}
				className={styles.product_img}
				alt={product.description}
			/>
			<div className={styles.product_info}>
				<h5 className={styles.product_title}>{product.title}</h5>
				<h5 className={styles.product_price}>${product.price}</h5>
				<div className={styles.buttons}>
					<button className={styles.buttons_Add}>Add To Cart</button>
					<NavLink to={`/products/${product.id}`}>
						<button className={styles.buttons_More}>
							More Info
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
