import Header from "@/components/Header";
import "./globals.css";
import "@/Styles/Styles.css";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // you can also specify weights: weights: ["400", "700"], or leave default
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
