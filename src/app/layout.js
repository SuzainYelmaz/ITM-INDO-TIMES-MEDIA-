import { Roboto, Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const merriweather = Merriweather({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const playfair = Playfair_Display({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Indo Times — Global Insights & Editorial Excellence",
  description: "Global Insights & Editorial Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${merriweather.variable} ${playfair.variable}`}
    >
      <body>
        <Header />
        <Ticker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
