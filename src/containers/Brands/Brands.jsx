import styles from '../Brands/Brands.module.scss';
import microsoft from '../../assets/icons/104472_windows_microsoft_icon.png';
import apple from '../../assets/icons/104490_apple_icon.png';
import samsung from '../../assets/icons/4691268_samsung_icon.png';
import huawei from '../../assets/icons/4691391_huawei_icon.png';
import dell from '../../assets/icons/4691411_dell_icon.png';

function Brands() {
	return (
		<div className={styles.container}>
			<div className={styles.brands_container}>
				<span>
					<img
						className={styles.brandLogo}
						src={microsoft}
						alt='microsoft logo'
					/>
				</span>
				<span>
					<img
						className={styles.brandLogo}
						src={apple}
						alt='microsoft logo'
					/>
				</span>
				<span>
					<img
						className={styles.brandLogo}
						src={samsung}
						alt='microsoft logo'
					/>
				</span>
				<span>
					<img
						className={styles.brandLogo}
						src={dell}
						alt='microsoft logo'
					/>
				</span>
				<span>
					<img
						className={styles.brandLogo}
						src={huawei}
						alt='microsoft logo'
					/>
				</span>
			</div>
		</div>
	);
}

export default Brands;
