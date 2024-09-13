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
            components: {
              Divider: {
                colorSplit: "black",
              },
            },
            token: {
              colorPrimary: "#13a89e",
              colorPrimaryHover: "#13a89e",
              colorPrimaryActive: "#13a89e",
              colorPrimaryText: "#13a89e",
              colorText: "#000000",
              colorTextSecondary: "#ffffff",
              colorFill: "#ffffffb0",
              colorTextPlaceholder: "#00000080",
              colorBgLayout: "#fff7f4",
              colorBgContainer: "#13a89e",
              colorFillSecondary: "#feefe9",
              borderRadius: 10,
              controlOutline: "none",
              fontFamily: '"Figtree", sans-serif',
            },
          }}
          button={{ style: { color: "white" } }}>
          <Layout>{children}</Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
