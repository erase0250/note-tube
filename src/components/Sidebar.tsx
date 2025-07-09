import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// 더미데이터
const dummyFolders = [
    { name: "개발 튜토리얼", color: "bg-blue-500" },
    { name: "영어 공부", color: "bg-green-500" },
    { name: "디자인", color: "bg-pink-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
];

export default function Sidebar() {
    return (
        // 사이드바 높이 = 브라우저 전체 높이 - 헤더 높이 (h-[calc(100vh-4rem)])
        <aside className="fixed top-16 left-0 w-52 h-[calc(100vh-4rem)] p-5 bg-white shadow-right rounded-tr-2xl overflow-y-auto">
            <div className="space-y-3">
                {/* 모든 영상 */}
                <button className="w-full flex items-center justify-between text-sm font-semibold text-primary hover:bg-gray-100 px-1 py-2 rounded">
                    <div className="flex items-center gap-2">
                        <HomeIcon />
                        <span>모든 영상</span>
                    </div>
                    <KeyboardArrowRightIcon
                        fontSize="small"
                        className="text-secondary"
                    />
                </button>

                {/* 구분선 */}
                <div className="w-full border-b border-border"></div>

                {/* 내 폴더 */}
                <div className="w-full flex items-center justify-between text-sm font-semibold text-primary px-1 py-2">
                    <div className="flex items-center gap-2">
                        <FolderIcon />
                        <span>내 폴더</span>
                    </div>
                </div>

                {/* 폴더 리스트 */}
                <ul className="space-y-1">
                    {dummyFolders.map((cat, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-1 py-2 rounded"
                        >
                            <li className="w-full flex items-center gap-5 text-sm text-primary">
                                <span
                                    className={`w-2 h-2 rounded-full ml-1 ${cat.color}`}
                                />
                                {cat.name}
                            </li>
                            <KeyboardArrowRightIcon
                                fontSize="small"
                                className="text-secondary"
                            />
                        </div>
                    ))}
                </ul>

                {/* TODO: UI 수정 */}
                {/* 새 폴더 추가 버튼 */}
                <button className="w-full flex items-center gap-1 text-xs text-secondary mt-4 px-1 py-2 hover:underline hover:text-gray-700 transition">
                    <AddCircleOutlineIcon fontSize="small" />
                    <span>새 폴더 추가 (UI 수정)</span>
                </button>
            </div>
        </aside>
    );
}
