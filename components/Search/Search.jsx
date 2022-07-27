import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import styles from "./Search.module.css";
import { GEO_API_URL, GeoApiOptions } from "../../utils/api";
import { motion } from "framer-motion";

export default function Search({ onSearchChange }) {
	const [search, setSearch] = useState();

	const loadOptions = (inputValue) => {
		return fetch(
			`${GEO_API_URL}?namePrefix=${inputValue}&minPopulation=1000&limit=7`,
			GeoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				return {
					options: response.data.map((city) => ({
						value: `${city.latitude} ${city.longitude}`,
						label: `${city.name}, ${city.countryCode}`,
					})),
				};
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<motion.div
				initial={{ y: 0, duration: 0.2 }}
				animate={{ y: -35 }}
				transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
				className={styles.searchContainer}
			>
				<AsyncPaginate
					className={styles.search}
					placeholder="Search for a city"
					debounceTimeout={1000}
					value={search}
					onChange={(value) => {
						setSearch(value);
						onSearchChange(value);
					}}
					loadOptions={loadOptions}
				/>
			</motion.div>
		</>
	);
}
