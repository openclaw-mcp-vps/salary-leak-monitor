import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Leak Monitor – Know If Your Salary Data Is Exposed",
  description: "Monitor data breaches and leaked databases for your salary information. Get instant email alerts when your data appears in a breach."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5d7b2c2b-c018-47db-9512-91d7c812dec0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
