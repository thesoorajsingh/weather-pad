import React from "react";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import Weather from "./Weather/Weather";
import { useRouter } from "next/router";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	setTimeout(() => {
		setIsLoading(false);
	}, 6000);

	return isLoading ? <LoadingScreen /> : <Weather />;
}
