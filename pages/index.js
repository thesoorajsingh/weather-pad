import React from "react";
import { useState } from "react";
import { LoadingScreen } from "./LoadingScreen/LoadingScreen";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 4100);

	return isLoading ? <LoadingScreen /> : <div></div>;
}
