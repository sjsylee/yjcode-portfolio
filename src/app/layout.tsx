import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "YJ CODE",
    template: "%s | YJ CODE",
  },
  description:
    "Brand, portfolio, and technical archive for YJ CODE — showcasing products, engineering depth, and design sensitivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
