import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "혼잡스 소개",
  description: "혼자서 잡(Job)을 할 수 있는 사람, 혼잡스를 소개합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=IBM+Plex+Sans+KR:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
