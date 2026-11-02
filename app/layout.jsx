import "./globals.css";
import { Hanken_Grotesk, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import PillNav from "@/components/site/PillNav";
import Footer from "@/components/site/Footer";
import LivingBackground from "@/components/site/LivingBackground";

const hanken = Hanken_Grotesk({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-hanken",
	display: "swap",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-geist-mono",
	display: "swap",
});

export const metadata = {
	metadataBase: new URL("https://portfolio-61xb.vercel.app"),
	title: {
		default: "George Romany, Frontend Engineer",
		template: "%s, George Romany",
	},
	description:
		"George Romany is a frontend engineer in Cairo building fast, careful interfaces with React, Next.js and TypeScript.",
	openGraph: {
		type: "website",
		siteName: "George Romany",
		description: "Frontend engineer in Cairo. React, Next.js, TypeScript.",
		images: [{ url: "/og-image-rev.png", alt: "George Romany, Frontend Engineer" }],
	},
};

export const viewport = {
	themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${hanken.variable} ${geistMono.variable}`}>
			<body className="flex min-h-dvh flex-col">
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
					Skip to content
				</a>
				<LivingBackground />
				<PillNav />
				<main id="main" className="relative z-10 flex-1">
					{children}
				</main>
				<div className="relative z-10">
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}
