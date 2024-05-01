import { Inter } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linus team (soccer)",
  description: "Linus team's (soccer) search service",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" href="/images/icon/favicon.ico" type="image/x-icon"/>
      </head>
      <body className={inter.className}>{children}</body>


      </html>
  );
}
