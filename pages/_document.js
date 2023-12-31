import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.cdnfonts.com/css/monster-hunter"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/public/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/public/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/public/favicon/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/public/favicon/site.webmanifest"
				/>
				<link
					rel="mask-icon"
					href="/public/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta
					name="msapplication-TileColor"
					content="#ffffff"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
				/>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
