"use client";

import "./globals.css";
import { Karla } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SubscribeNewsLetter from "./components/subscribe/SubscribeNewsLetter";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { getTitle } from "./getTitle";

const karla = Karla({
	subsets: ["latin"],
	weight: ["200", "400", "600", "800"],
});

export default function RootLayout({ children }) {
	const pathname = usePathname();

	useEffect(() => {
		document.title = getTitle(pathname);
	}, [pathname]);

	return (
		<html lang="en">
			<body className={karla.className} suppressHydrationWarning>
				<Navbar />
				<div className="pt-[97px]">{children}</div>
				<SubscribeNewsLetter />
				<Footer />
			</body>
		</html>
	);
}
