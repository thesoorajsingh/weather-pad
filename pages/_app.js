import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<Component {...pageProps} />
		</AnimatePresence>
	);
}

export default MyApp;
