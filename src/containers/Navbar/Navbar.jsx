import styles from '../Navbar/Navbar.module.scss';
import { useEffect, useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Navbar() {
	const [displayLinks, setDisplayLinks] = useState(true);

	const handleDisplay = () => {
		setDisplayLinks(!displayLinks);
	};

	const handleCart = () => {
		console.log('hola');
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

				<div className={styles.rightBlock}>
					<div
						className={
							displayLinks
								? styles.navbar_links
								: styles.navbar_links_hidden
						}>
						<NavLink className={styles.link} to='/'>
							Home
						</NavLink>
						<NavLink className={styles.link} to='/products'>
							Products
						</NavLink>
						<NavLink className={styles.link} to='/about'>
							About
						</NavLink>
					</div>
					<FontAwesomeIcon
						className={styles.navbar_bars}
						icon={faBars}
						onClick={handleDisplay}
					/>
					<FontAwesomeIcon
						className={styles.navbar_cart}
						icon={faShoppingCart}
						onClick={handleCart}
					/>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
