import styles from '../Navbar/Navbar.module.scss';
import { useEffect, useState } from 'react';
import Link from '../../components/Link';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
	const [displayLinks, setDisplayLinks] = useState(true);

	const handleDisplay = () => {
		setDisplayLinks(!displayLinks);
	};

	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<div>
					<img
						className={styles.navbar_logo}
						src={logo}
						alt='tech logo'
					/>
				</div>
				<div
					className={
						displayLinks
							? styles.navbar_links
							: styles.navbar_links_hidden
					}>
					<Link title={'Link 1'} />
					<Link title={'Link 2'} />
					<Link title={'Link 3'} />
					<Link title={'Link 4'} />
				</div>
				<FontAwesomeIcon
					className={styles.navbar_bars}
					icon={faBars}
					onClick={handleDisplay}
				/>
			</nav>
		</div>
	);
}

export default Navbar;
