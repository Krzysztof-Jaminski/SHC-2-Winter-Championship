import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SHC 2 Winter Championship",
  description:
    "Join the ultimate Crusader 2 Tournament. Experience the thrill, strategize your moves,the Best players are already in, are you too?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
