import SearchBar from "./Searchbar/Searchbar";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between backdrop-blur-2xl bg-white/70 z-50 h-16 px-5">
            {/* 로고 */}
            <div className="flex items-center gap-1">
                <img className="w-8 h-8" src="/icons/logo.svg" alt="로고" />
                <h1 className="logo text-2xl font-bold text-primary">
                    NoteTube
                </h1>
            </div>

            {/* 검색바 */}
            <div className="w-[40%]">
                <SearchBar />
            </div>

            <div className="flex items-center">
                {/* 다크모드 토글 버튼 */}
                <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                    <BedtimeIcon fontSize="small" className="text-primary" />
                </button>
                {/* 로그인 버튼 */}
                <button className="h-9 px-3 flex items-center gap-1 bg-primary rounded-full border hover:brightness-130 transition ml-3">
                    <AccountCircleOutlinedIcon
                        fontSize="small"
                        className="text-white"
                    />
                    <span className="text-sm text-white whitespace-nowrap">
                        로그인
                    </span>
                </button>
            </div>
        </header>
    );
}
