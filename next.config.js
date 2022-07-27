/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	images: {
		domains: ["cdn.weatherapi.com"],
	},
};
