import styles from '../Hero/Hero.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Hero({ images }) {
	const [currentImage, setCurrentImage] = useState(0);

	const handleRight = (e) => {
		currentImage < images.length - 1 && setCurrentImage(currentImage + 1);
	};

	const handleLeft = (e) => {
		currentImage > 0 && setCurrentImage(currentImage - 1);
	};
	const navigate = useNavigate();

	const handleClick = () => navigate('/products');

	return (
		<div
			className={styles.container}
			style={{
				backgroundImage: `url(${images[currentImage]})`,
			}}>
			<div className={styles.left} onClick={handleLeft}>
				<ArrowBackIosIcon />
			</div>
			<div className={styles.block}>
				<h2 className={styles.title}>
					Everything you can imagine is here
				</h2>
				<button onClick={handleClick} className={styles.button}>
					Shop Now
				</button>
			</div>

			<div className={styles.right} onClick={handleRight}>
				<ArrowForwardIosIcon />
			</div>
		</div>
	);
}

export default Hero;
