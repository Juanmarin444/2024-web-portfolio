import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Juan Marin | Front-end Developer",
  description: "Juan Marin's person web portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100 dark:bg-neutral-900 text-[1.12vw] 2xl:text-[18.33px] min-w-96`}>{children}</body>
    </html>
  );
}
