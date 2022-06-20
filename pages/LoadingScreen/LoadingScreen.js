import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
	return (
		<div className={styles.loadingBody}>
			<svg className={styles.loadingAnimation} viewBox="0 0 1320 300">
				<text x="50%" y="50%" dy=".35em" textAnchor="middle">
					weatherpad
				</text>
			</svg>
		</div>
	);
}
