import styles from '../Footer/Footer.module.scss';

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.logo}>
				<h2 className={styles.tick}>Juan</h2>
				<h2 className={styles.thin}>Maurente</h2>
			</div>
			<p className={styles.date}>
				Copyright &copy;
				{new Date().getFullYear()}
				<span> | Juan Maurente</span>
				<br />
				All Rights Reserved
			</p>
		</div>
	);
}

export default Footer;
