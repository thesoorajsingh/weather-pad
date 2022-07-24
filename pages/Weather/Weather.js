import React, { useEffect } from "react";
import styles from "./Weather.module.css";
import { motion } from "framer-motion";
import Search from "../../components/Search/Search.jsx";
import Image from "next/image";
import sun from "../../assets/sun.svg";
import sunLottie from "../../assets/82378-sunny-weather.json";
import { LottiePlayer } from "lottie-react";

export default function Weather() {
	const [weather, setWeather] = React.useState(null);
	const [location, setLocation] = React.useState("Bengaluru");
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "ec0db162e7msh7ff614a3ef5101cp165d29jsndd41fd484b19",
			"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
		},
	};

	// useEffect(() => {
	// 	fetch(
	// 		`https://community-open-weather-map.p.rapidapi.com/weather?q=${location}&lat=0&lon=0&id=2172797&lang=null&units=metric`,
	// 		options
	// 	)
	// 		.then((response) => response.json())
	// 		.then((response) => setWeather(response))
	// 		.catch((err) => console.error(err));
	// }, []); // eslint-disable-line

	setTimeout(() => {}, 1500);

	// https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&id=2172797&lang=null&units=metric&mode=json

	console.log(weather);

	const handleOnSearchChange = (searchData) => {};

	return (
		<>
			<motion.div
				className={styles.mainContainer}
				initial={{
					y: 0,
					duration: 0.5,
				}}
				animate={{
					y: -150,
				}}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
			>
				<Search onSearchChange={handleOnSearchChange} />
				<div id="weatherContainer" className={`${styles.weatherContainer}`}>
					<div className={styles.location}>{"Mysore"}</div>
					<div className={styles.temperature}>{"22"}°C</div>
				</div>
			</motion.div>
		</>
	);
}
