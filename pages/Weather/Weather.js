import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import { motion } from "framer-motion";
import Search from "../../components/Search/Search.jsx";

export default function Weather() {
	const [currentWeather, setCurrentWeather] = useState({});
	const [forecastWeather, setForecastWeather] = useState({});
	const [currentLocation, setCurrentLocation] = useState("Bengaluru, IN");
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "ec0db162e7msh7ff614a3ef5101cp165d29jsndd41fd484b19",
			"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
		},
	};

	const handleOnSearchChange = (searchData) => {
		console.log;
		searchData.label !== undefined
			? setCurrentLocation(searchData.label)
			: null;
		const [lat, lon] = searchData.value.split(" ");

		const fetchCurrentWeather = fetch(
			`https://community-open-weather-map.p.rapidapi.com/weather?lat=${
				lat !== undefined ? lat : "12.9716"
			}&lon=${lon !== undefined ? lon : "77.5946"}&units=metric`,
			options
		);

		// const fetchForecastWeather = fetch(
		// 	`https://community-open-weather-map.p.rapidapi.com/forecast?lat=${
		// 		lat !== undefined ? lat : "12.9716"
		// 	}&lon=${lon !== undefined ? lon : "77.5946"}&units=metric`,
		// 	options
		// );

		Promise.all([fetchCurrentWeather])
			.then(async (response) => {
				const current = await response[0].json();
				setCurrentWeather(current);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		handleOnSearchChange({ value: "12.9716 77.5946" });
	}, []); // eslint-disable-line

	return (
		<>
			<motion.div
				className={styles.mainContainer}
				initial={{
					y: 0,
					duration: 0.5,
				}}
				animate={window.innerwidth > 768 ? { y: -150 } : { y: -75 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
			>
				<Search onSearchChange={handleOnSearchChange} />
				<div id="weatherContainer" className={`${styles.weatherContainer}`}>
					<div className={styles.location}>{currentLocation}</div>
					<div className={styles.temperature}>
						{currentWeather.main?.temp}°C
					</div>
				</div>
			</motion.div>
		</>
	);
}
