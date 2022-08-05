import styles from '../Hero/Hero.module.scss';
import img from '../../assets/background/fabian-albert-iiPOd73iCUQ-unsplash.jpg';

function Hero() {
	return (
		<div className={styles.fullContainer}>
			<img
				className={styles.hero_back}
				src={img}
				alt='phone background'
			/>
			<div className={styles.hero_block}>
				<h2 className={styles.hero_title}>
					Everything you can imagine is here
				</h2>
				<button className={styles.hero_button}>Shop Now</button>
			</div>
		</div>
	);
}

export default Hero;
