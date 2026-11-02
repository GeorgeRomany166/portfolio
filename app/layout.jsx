import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "George Romany | Frontend Engineer",
    description:
		"George Romany, Frontend Engineer in Cairo building production web apps with React.js, Next.js and TypeScript.",

    openGraph: {
		type: "website",
		
		site_name: "George Romany | Frontend Engineer",
		description: "Frontend Engineer building production web apps with React.js, Next.js and TypeScript.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "George Romany, Frontend Engineer",
			},
		],
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
