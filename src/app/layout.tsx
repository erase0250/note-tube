import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Pretendard 폰트
const pretendard = localFont({
    src: "../../public/fonts/pretendard/PretendardVariable.woff2",
    display: "swap",
    weight: "100 900",
    variable: "--font-pretendard",
});

// 로고 폰트
const youtube = localFont({
    src: "../../public/fonts/youtube/AlternateGothicNo2D.ttf",
    display: "swap",
    weight: "700",
    variable: "--font-youtube",
});

// 메타데이터
export const metadata: Metadata = {
    title: "NoteTube",
    // 추가 예정
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ko"
            className={`${pretendard.variable} ${youtube.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
