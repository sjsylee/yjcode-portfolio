import type { Metadata } from "next";
import { siteConfig } from "@/domain/site/seo";
import "./globals.css";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const naverSiteVerification = process.env.NAVER_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "YJ CODE.",
    template: "%s | YJ CODE.",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "YJ CODE", url: siteConfig.url }],
  creator: "YJ CODE",
  publisher: "YJ CODE",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YJ CODE.",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1792,
        height: 1024,
        alt: "YJ CODE cinematic product studio visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YJ CODE.",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    ...(googleSiteVerification
      ? { google: googleSiteVerification }
      : undefined),
    ...(naverSiteVerification
      ? {
          other: {
            "naver-site-verification": naverSiteVerification,
          },
        }
      : undefined),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "YJ CODE",
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.png`,
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "ko-KR",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
