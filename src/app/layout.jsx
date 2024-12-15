import "./globals.css";
import localFont from "next/font/local";

// フォントの設定
const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// メタデータの設定
export const metadata = {
  title: "PHOTO KISHIMOTO Official Site",
  description: "PHOTO KISHIMOTO Official Site",
  keywords: [
    "PHOTO KISHIMOTO",
    "フォート・キシモト",
    "スポーツ",
    "写真",
    "貸出",
    "写真会社",
    "スポーツ専門",
    "フォトアーカイブ"
  ],
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://photokishimoto.com'),
  openGraph: {
    title: "PHOTO KISHIMOTO Official Site",
    description: "",
    url: 'https://photokishimoto.com',
    siteName: "PHOTO KISHIMOTO Official Site",
    images: [{
      url: 'https://www',
    }],
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: '',
    site: '',
  },
  facebook: {
    appId: '',
  },
};

// ルートレイアウトコンポーネント
export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
} 