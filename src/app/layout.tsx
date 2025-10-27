import "@/styles/globals.css";
import "react-multi-carousel/lib/styles.css"
import { type Metadata } from "next";
import { Urbanist } from "next/font/google";
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "MGS | Mood Global Services",
  description: "Shape the future: Bespoke blockchain tech at your fingertips.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const urbanist = Urbanist({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
