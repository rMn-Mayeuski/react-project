import Rights from './Rights/Rights';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Rights />
		</footer>
	);
};

export default Footer;
