import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const lustria = localFont({
  variable: "--font-lustria",
  display: "swap",
  src: [{ path: "./fonts/Lustria-Regular.woff2", weight: "400", style: "normal" }],
});

const interBoldItalic = localFont({
  variable: "--font-inter-bold-italic",
  display: "swap",
  preload: false,
  src: [
    { path: "./fonts/Inter-BoldItalic-latin.woff2", weight: "700", style: "italic" },
  ],
});

const title = "Bethville Bookkeeping Services: Your Partner in Financial Clarity";
const description =
  "Bethville Bookkeeping Services offers tailored bookkeeping, financial reporting, payroll management, and tax support to help businesses stay organized and financially sound. ";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://bethvilleservices.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/",
    images: ["/images/og-image.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpeg"],
  },
  robots: { "max-image-preview": "large" },
};

export const viewport: Viewport = {
  width: "device-width",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${lustria.variable} ${interBoldItalic.variable}`}
    >
      <body className="bg-page font-sans text-ink">{children}</body>
    </html>
  );
}
