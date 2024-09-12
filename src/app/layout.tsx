import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout, ConfigProvider } from "antd";
import Footer from "@/components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Estetik International",
  description: "Estetik International Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConfigProvider
          theme={{
            token: {
              // Colors
              colorBgLayout: "#fff7f4", // --body-background
              colorPrimary: "#13a89e", // --primary-color
              colorText: "#000000", // --text-color
              // colorFillAccent: "#ffffff", // --accent-color
              colorTextSecondary: "#ffffff", // --secondry-color
              colorFill: "#ffffffb0", // --transparent-color
              colorTextPlaceholder: "#00000080", // --transparent-secondry-color
              colorBgContainer: "#13a89e", // --light-Background
              colorFillSecondary: "#feefe9", // --light-accent-color
              fontFamily: '"Figtree", sans-serif', // --default-font
              borderRadius: 10,
              colorInfo: "#13a89e",
            },
          }}
          divider={{ style: { backgroundColor: "black" } }}
          button={{ style: { color: "white" } }}>
          <Layout>{children}</Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
