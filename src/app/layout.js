import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Forti Finder",
	description:
		"Forti Finder is your ultimate companion for Fortnite, offering robust player tracking features to enhance your gaming experience. With Forti Finder, you can effortlessly monitor the performance and progress of your friends, rivals, and favorite streamers in real-time. Stay ahead of the competition by analyzing detailed stats, match histories, and leaderboard standings. Whether you're a casual player looking to improve or a seasoned competitor aiming for victory royale, Forti Finder provides the tools you need to elevate your Fortnite journey. Discover, track, and dominate with Forti Finder today!",
	icons: {
		icon: "/images/logo.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
