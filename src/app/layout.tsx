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
        <meta charSet="UTF-8" />
        <meta name="robots" content="noindex, nofollow" />
        <script
          type="text/javascript"
          src="//cdn.cookie-script.com/s/5c39cca7bc7310f23b176b487613c5e9.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TSR3FZ2H');`,
          }}
        />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSR3FZ2H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ConfigProvider
          theme={{
            components: {
              Menu: {
                colorPrimary: "#0a5b56",
                itemColor: "#000000",
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
          button={{ style: { color: "white" } }}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
