import "../styles/globals.css";
import localFont from "next/font/local";
import Head from "next/head";

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

// メタ情報オブジェクト
const metaInfo = {
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
  description: "PHOTO KISHIMOTO Official Site",
  keywords:
    "PHOTO KISHIMOTO, フォート・キシモト,スポーツ, 写真, 貸出,写真会社,スポーツ専門,フォトアーカイブ",
  og: {
    url: "https://photokishimoto.com",
    type: "website",
    title: "PHOTO KISHIMOTO Official Site",
    description: "",
    siteName: "PHOTO KISHIMOTO Official Site",
    image: "https://www",
    locale: "ja_JP",
  },
  robots: "index, follow",
  formatDetection: "telephone=no",
  fbAppId: "",
  twitter: {
    card: "",
    site: "",
  },
};

// ルートレイアウトコンポーネント
export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        {/* メタデータ */}
        <meta charSet={metaInfo.charset} />
        <meta name="viewport" content={metaInfo.viewport} />
        <meta name="description" content={metaInfo.description} />
        <meta name="keywords" content={metaInfo.keywords} />
        <meta property="og:url" content={metaInfo.og.url} />
        <meta name="robots" content={metaInfo.robots} />
        <meta name="format-detection" content={metaInfo.formatDetection} />
        <meta property="og:type" content={metaInfo.og.type} />
        <meta property="og:title" content={metaInfo.og.title} />
        <meta property="og:description" content={metaInfo.og.description} />
        <meta property="og:site_name" content={metaInfo.og.siteName} />
        <meta property="og:image" content={metaInfo.og.image} />
        <meta property="og:locale" content={metaInfo.og.locale} />
        <meta property="fb:app_id" content={metaInfo.fbAppId} />
        <meta name="twitter:card" content={metaInfo.twitter.card} />
        <meta name="twitter:site" content={metaInfo.twitter.site} />
        <title>{metaInfo.og.title}</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
