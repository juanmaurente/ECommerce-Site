import styles from '../ProductCard/ProductCard.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';

function ProductCard({ id, title, thumbnail, brand, description, price }) {
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
				<div className={styles.buttons}>
					<button className={styles.buttons_Add}>Add To Cart</button>
					<NavLink
						to={`/products/${id}`}
						className={styles.buttons_More}>
						More Info
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
