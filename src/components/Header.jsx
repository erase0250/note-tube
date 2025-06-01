import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import DarkModeToggle from "./DarkModeToggle";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "./SideBar";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
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

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
}
