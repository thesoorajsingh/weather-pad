import React from "react";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import Weather from "./Weather/Weather";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 6000);

	return isLoading ? <LoadingScreen /> : <Weather />;
};

export default Home;
