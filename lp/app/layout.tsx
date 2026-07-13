import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "LOVED GUN / ラブドガン — Official Concept Site",
  description: "忘れたいのは、君じゃなかった。亡くした恋人と悲しみをめぐる2D短編アニメーション映画『LOVED GUN / ラブドガン』公式コンセプトサイト。",
  openGraph: {
    title: "LOVED GUN / ラブドガン",
    description: "忘れたいのは、君じゃなかった。",
    images: ["/images/key-visual.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
