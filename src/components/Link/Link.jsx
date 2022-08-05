import styles from '../Link/Link.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Link({ title }) {
	return (
		<div className={styles.link}>
			{title}
			<FontAwesomeIcon className={styles.link_icon} icon={faAngleDown} />
		</div>
	);
}

export default Link;
