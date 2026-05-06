import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "YJ CODE.",
    template: "%s | YJ CODE.",
  },
  description:
    "YJ CODE는 SaaS 제품, 비즈니스 웹 플랫폼, 브랜드 웹사이트를 설계하고 구현하는 제품 디자인 스튜디오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
