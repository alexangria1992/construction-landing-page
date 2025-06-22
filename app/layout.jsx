import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmSans",
  display: "swap", // Optional but recommended
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${barlow.variable}`}>
      <body className="font-secondary text-secondary antialiased">
        {children}
      </body>
    </html>
  );
}
