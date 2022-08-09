import styles from '../ProductsGrid/ProductsGrid.module.scss';
import ProductCard from '../../components/ProductCard';

function ProductsGrid({ products }) {
	return (
		<div className={styles.container}>
			<div className={styles.ProductsGallery}>
				{products
					.sort((a, b) => {
						return a.category - b.category;
					})
					.map((product) => {
						return (
							<ProductCard
								key={product.id}
								thumbnail={product.thumbnail}
								title={product.title}
								brand={product.brand}
								description={product.description}
								price={product.price}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default ProductsGrid;
