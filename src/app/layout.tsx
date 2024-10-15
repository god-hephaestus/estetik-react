import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
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
      <body className={`${montserrat.variable} antialiased`}>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                colorText: "#ffffff",
                colorPrimary: "#13a89e",
                colorTextLightSolid: "#ffffff",
              },
              Input: { colorBgContainer: "#ffffff" },
              Select: { colorBgContainer: "#ffffff" },
              Divider: {
                colorSplit: "#13a89e",
                lineWidth: 2,
              },
              Carousel: {
                arrowSize: 24,
              },
              Collapse: {},
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
              colorFillSecondary: "#0a5b56",
              borderRadius: 10,
              controlOutline: "none",
              fontFamily: "var(--font-montserrat)",
            },
          }}
          button={{ style: { color: "white" } }}>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
