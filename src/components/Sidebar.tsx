"use client";

import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

// 더미데이터
const dummyFolders = [
    { name: "개발 튜토리얼", color: "bg-blue-500" },
    { name: "영어 공부", color: "bg-green-500" },
    { name: "디자인", color: "bg-pink-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
];

export default function Sidebar() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null); // null은 '모든 영상' 탭 선택 상태

    return (
        // 사이드바 높이 = 브라우저 전체 높이 - 헤더 높이 (h-[calc(100vh-4rem)])
        <aside className="fixed top-16 left-0 w-52 h-[calc(100vh-4rem)] px-4 py-3 bg-white overflow-y-auto transition-all">
            <div className="space-y-2">
                {/* 모든 영상 */}
                <div
                    onClick={() => setSelectedIdx(null)}
                    className={`w-full flex items-center justify-between text-sm font-medium text-primary px-1 py-2 rounded cursor-pointer transition ${
                        selectedIdx === null
                            ? "bg-selected"
                            : "hover:bg-selected"
                    }`}
                >
                    <div className="flex items-center gap-2">
                        <HomeIcon />
                        <span>모든 영상</span>
                    </div>
                </div>

                {/* 구분선 */}
                <div className="w-full border-b border-border"></div>

                {/* 재생목록 */}
                <div className="w-full flex items-center justify-between text-sm font-medium text-primary px-1 py-2">
                    <div className="flex items-center gap-2">
                        <PlaylistPlayIcon />
                        <span>재생목록</span>
                    </div>
                    <button className="w-7 h-7 flex items-center justify-center hover:text-gray-700 hover:bg-selected rounded-full p-1 transition cursor-pointer">
                        <AddIcon
                            fontSize="inherit"
                            className="text-[10px] text-secondary"
                        />
                    </button>
                </div>

                {/* 재생목록 리스트 */}
                <ul className="space-y-1">
                    {dummyFolders.map((cat, idx) => {
                        const isSelected = idx === selectedIdx;
                        return (
                            <div
                                key={idx}
                                onClick={() => setSelectedIdx(idx)}
                                className={`flex items-center cursor-pointer px-1 py-2 rounded transition ${
                                    isSelected
                                        ? "bg-selected"
                                        : "hover:bg-selected"
                                }`}
                            >
                                <li className="w-full flex items-center gap-3 ml-2 text-sm text-primary">
                                    <span
                                        className={`w-2 h-2 rounded-full ml-1 ${cat.color}`}
                                    />
                                    {cat.name}
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}
