import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBar() {
    const { keyword } = useParams();
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/video/${text}`);
    };

    useEffect(() => setText(keyword || ""), [keyword]);

    return (
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            <div className="w-[60%] flex border border-zinc-300 rounded-full overflow-hidden bg-white">
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="flex-grow px-5 py-3 text-sm text-gray-800 placeholder-gray-400 bg-white outline-none"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 flex items-center justify-center bg-gray-100 border-l border-zinc-300 hover:bg-zinc-200 transition"
                >
                    <BsSearch size={18} className="text-zinc-700" />
                </button>
            </div>
        </form>
    );
}
