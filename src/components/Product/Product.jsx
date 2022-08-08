import styles from '../Product/Product.module.scss';
import { useNavigate } from 'react-router-dom';

function Product({ id, title, thumbnail, brand, description, price }) {
	const navigate = useNavigate();

	const handleInfo = (e) => {
		navigate('/product');
	};
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
					<button
						onClick={handleInfo}
						className={styles.buttons_More}>
						More Info
					</button>
				</div>
			</div>
		</div>
	);
}

export default Product;
