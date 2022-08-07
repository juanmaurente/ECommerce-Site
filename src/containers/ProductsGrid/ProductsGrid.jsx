import styles from '../ProductsGrid/ProductsGrid.module.scss';
import Product from '../../components/Product';

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
							<Product
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
