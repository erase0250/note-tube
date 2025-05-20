import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import DarkModeToggle from "./DarkModeToggle";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            {/* 헤더 */}
            <header className="w-full h-24 flex p-4 items-center">
                <button onClick={toggleSidebar}>
                    <IoIosMenu className="w-8 h-8 mr-3" />
                </button>

                <Link to="/" className="flex items-center gap-1">
                    <img src="/icons/logo.svg" alt="로고" className="w-10" />
                    <h1 className="font-youtube text-2xl font-bold">
                        TubeMark
                    </h1>
                </Link>

                <SearchBar />
                <DarkModeToggle />
                <LoginButton />
            </header>

            {/* 사이드바 */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-300 shadow-md transform transition-transform duration-300 z-50 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            ></aside>

            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-30 z-40"
                ></div>
            )}
        </>
    );
}
