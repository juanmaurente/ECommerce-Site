import styles from '../Brands/Brands.module.scss';
import microsoft from '../../assets/icons/294669_microsoft_icon.png';
import canon from '../../assets/icons/294694_canon_icon.png';
import apple from '../../assets/icons/104490_apple_icon.png';
import samsung from '../../assets/icons/4691268_samsung_icon.png';
import huawei from '../../assets/icons/4691391_huawei_icon.png';
import dell from '../../assets/icons/4691411_dell_icon.png';

function Brands() {
	return (
		<div>
			<span>
				<img src={microsoft} alt='microsoft logo' />
			</span>
			<span>
				<img src={apple} alt='microsoft logo' />
			</span>
			<span>
				<img src={samsung} alt='microsoft logo' />
			</span>
			<span>
				<img src={dell} alt='microsoft logo' />
			</span>
			<span>
				<img src={huawei} alt='microsoft logo' />
			</span>
			<span>
				<img src={canon} alt='microsoft logo' />
			</span>
		</div>
	);
}

export default Brands;
