import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from "next/font/google";


const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Solaria",
  description: "3D Solar System App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} antialiased`}
      >
     
        {children}
      </body>
    </html>
  );
}
