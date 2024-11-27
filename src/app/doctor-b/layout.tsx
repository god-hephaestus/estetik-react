import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../doctorb.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Doctor B",
  description: "Doctor B Landing Page",
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

        <Script
          id="cookie-script"
          type="text/javascript"
          src="https://cdn.cookie-script.com/s/cda4036ace932798bcdbe68e7d672633.js"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
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
                colorPrimary: "#6f4d3c",
                itemColor: "#000000",
              },
              Input: { colorBgContainer: "#000000" },
              Select: { colorBgContainer: "#000000" },
              Divider: {
                colorSplit: "#c0a062",
                lineWidth: 2,
              },
              Carousel: {
                arrowSize: 24,
              },
            },
            token: {
              colorPrimary: "#c0a062",
              colorPrimaryHover: "#c0a062",
              colorPrimaryActive: "#c0a062",
              colorPrimaryText: "#c0a062",
              colorText: "#000000",
              colorTextSecondary: "#000000",
              colorFill: "#000000b0",
              colorTextPlaceholder: "#00000080",
              colorBgLayout: "#fff7f4",
              colorBgContainer: "#c0a062",
              colorFillSecondary: "#6f4d3c",
              borderRadius: 10,
              controlOutline: "none",
              fontFamily: "var(--font-montserrat)",
            },
          }}
          button={{ style: { color: "#000000" } }}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
