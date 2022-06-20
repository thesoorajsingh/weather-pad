import React from "react";
import styles from "./Weather.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import sun from "../../assets/sun.svg";

export default function Weather() {
	const weatherData = {
		location: "Bangalore",
		temperature: "30",
		weatherCondition: "Sunny",
	};
	return (
		<motion.div className={styles.weatherBody}>
			<motion.div
				className={styles.weatherCard}
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h1>
					<span style={{ color: "#0000ff" }}>Location:</span>{" "}
					{weatherData.location}
				</h1>
				<h1>
					<span style={{ color: "#0000ff" }}>Temperature:</span>{" "}
					{weatherData.temperature}
				</h1>
				<h1>
					<span style={{ color: "#0000ff" }}>Conditions:</span>{" "}
					<Image
						src={sun}
						alt="weather condition icon"
						width={25}
						height={25}
						style={{ marginRight: "0.1rem" }}
					/>
					{weatherData.weatherCondition}
				</h1>
			</motion.div>
		</motion.div>
	);
}
