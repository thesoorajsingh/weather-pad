import React from "react";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import Weather from "./Weather/Weather";

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);

	setTimeout(() => {
		setIsLoading(false);
	}, 6000);

	return typeof window !== undefined && isLoading ? (
		<LoadingScreen />
	) : (
		<Weather />
	);
};

export default Home;
