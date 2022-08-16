import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import { motion } from "framer-motion";
import Search from "../../components/Search/Search.jsx";
import Image from "next/image";
import Lottie from "lottie-react";

export default function Weather() {
	const [currentWeather, setCurrentWeather] = useState({});
	const [forecastWeather, setForecastWeather] = useState({});
	const [icon, setIcon] = useState({
		src: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
	});
	const [currentLocation, setCurrentLocation] = useState("Bengaluru, IN");
	const handleOnSearchChange = (searchData) => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "8d7dbf45e5mshb3fe3ea57d6323fp194daejsn8de1575cdec5",
				"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
			},
		};
		searchData.label !== undefined
			? setCurrentLocation(searchData.label)
			: null;
		const [lat, lon] = searchData.value.split(" ");

		const fetchCurrentWeather = fetch(
			`https://weatherapi-com.p.rapidapi.com/current.json?q=${
				lat !== undefined ? lat : "12.9716"
			},${lon !== undefined ? lon : "77.5946"}`,
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
				console.log(current);
				setCurrentWeather(current);
				setIcon({ src: "https:" + current?.current.condition.icon });
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
				animate={{ y: -75 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
			>
				<Search onSearchChange={handleOnSearchChange} />
				<div id="weatherContainer" className={`${styles.weatherContainer}`}>
					<div className={styles.location}>{currentLocation}</div>
					<div className={styles.temperature}>
						<Image
							src={`${icon.src}`}
							alt="Current Weather condition icon"
							width="100px"
							height="100px"
							className={styles.icon}
						/>
						{currentWeather?.current?.temp_c}°C
					</div>
				</div>
			</motion.div>
		</>
	);
}
