import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Weatherpad</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<AnimatePresence>
				<Component {...pageProps} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
