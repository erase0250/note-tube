import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
    return (
        <form className="w-full flex justify-center">
            <div className="relative w-[70%]">
                <input
                    className="w-full bg-black text-white p-4 pr-12 rounded-full placeholder-gray-400"
                    type="text"
                    placeholder="검색어를 입력하세요"
                />
                <button
                    type="submit"
                    className="absolute top-7 right-4 -translate-y-1/2 bg-zinc-600 p-2 rounded-full text-white hover:bg-zinc-500 transition"
                >
                    <BsSearch size={20} />
                </button>
            </div>
        </form>
    );
}
