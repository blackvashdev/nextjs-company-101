import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./site.css";

const vazirmatn = localFont({
  src: [
    {
      path: "../../public/fonts/vazirmatn-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazirmatn-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "نواک ابر | زیرساخت ارتباطی سازمانی",
  description:
    "راهکارهای اتصال امن، پایدار و مقیاس‌پذیر برای سازمان‌ها و تیم‌های توزیع‌شده.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
