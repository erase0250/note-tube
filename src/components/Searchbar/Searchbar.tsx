import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    return (
        <div className="w-full h-10 flex border border-zinc-300 rounded-full overflow-hidden bg-white">
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="flex-grow px-5 py-3 text-sm placeholder-gray-400 bg-white outline-none"
            />
            <button
                type="submit"
                className="px-4 flex items-center justify-center bg-gray-100 border-l border-zinc-300 hover:bg-zinc-200 transition"
            >
                <SearchIcon />
            </button>
        </div>
    );
}
