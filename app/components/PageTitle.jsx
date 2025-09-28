import styles from "./../../styles/PageTitle.module.css";

export default function PageTitle({ title }) {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div className={styles.title}>{title}</div>
			</div>
		</div>
	);
}
