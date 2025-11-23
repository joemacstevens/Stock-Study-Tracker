import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stock Study Tracker",
  description: "Track and manage stock studies and watchlists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
