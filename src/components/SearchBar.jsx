import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBar() {
    const { keyword } = useParams();
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (trimmed) {
            navigate(`/search/${trimmed}`);
        }
    };

    useEffect(() => setText(keyword || ""), [keyword]);

    return (
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            <div className="w-[60%] flex border border-zinc-300 dark:border-zinc-600 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="flex-grow px-5 py-3 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 outline-none"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700 border-l border-zinc-300 dark:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-gray-600 transition"
                >
                    <BsSearch
                        size={18}
                        className="text-zinc-700 dark:text-gray-200"
                    />
                </button>
            </div>
        </form>
    );
}
