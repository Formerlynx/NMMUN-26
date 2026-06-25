import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next"

import { homeMetaData } from "@/lib/metadata";
export const metadata = homeMetaData;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="font-sans">{children}</body>
		</html>
	);
}
