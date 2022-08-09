import styles from '../Hero/Hero.module.scss';
import img from '../../assets/images/fabian-albert-iiPOd73iCUQ-unsplash.jpg';
import { useNavigate } from 'react-router';

function Hero() {
	const navigate = useNavigate();

	const handleClick = () => navigate('/products');

	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<h2 className={styles.title}>
					Everything you can imagine is here
				</h2>
				<button onClick={handleClick} className={styles.button}>
					Shop Now
				</button>
			</div>
		</div>
	);
}

export default Hero;
