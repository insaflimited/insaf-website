import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INSAF Limited | Architectural Excellence",
  description: "Defining Bangladesh's skyline with architectural excellence since 2018.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ 
        margin: 0, 
        padding: 0,
        backgroundColor: '#0A0A0A',
        minHeight: '100vh'
      }}>
        {children}
      </body>
    </html>
  );
}