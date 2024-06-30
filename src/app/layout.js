import { Inter } from "next/font/google";
import "./globals.css";

// import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
// register();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EDG SkateBoard",
  description: "SK8 - EDG SkateBoard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
