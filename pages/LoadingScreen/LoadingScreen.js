import styles from "./LoadingScreen.module.css";
import { motion } from "framer-motion";

export default function LoadingScreen() {
	return (
		<motion.div
			className={styles.loadingBody}
			exit={{ opacity: 0, y: -50 }}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<svg className={styles.loadingAnimation} viewBox="0 0 1320 300">
				<text x="50%" y="50%" dy=".35em" textAnchor="middle">
					weatherpad
				</text>
			</svg>
		</motion.div>
	);
}
