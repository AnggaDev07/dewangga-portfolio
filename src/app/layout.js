import { Poppins } from "next/font/google";
import RainbowCursor from "../components/RainbowCursor/RainbowCursor";
import Preloader from "../components/Preloader/Preloader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Dewangga Fadillah Yusuf | Full-Stack Developer",
  description:
    "Hello, I'm Dewangga Fadillah Yusuf, a Full-Stack Developer who enjoys building web applications from the ground up. I love solving complex problems, crafting intuitive user experiences, and developing efficient systems.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Front-End",
    "Back-End",
    "Portfolio",
    "Dewangga Fadillah Yusuf"
  ],
  authors: [{ name: "Dewangga Fadillah Yusuf" }],
  openGraph: {
    title: "Dewangga Fadillah Yusuf | Full-Stack Developer",
    description:
      "Portfolio of Dewangga Fadillah Yusuf, a Full-Stack Developer specializing in modern web systems and game development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Preloader />
        <RainbowCursor />
        {children}
      </body>
    </html>
  );
}