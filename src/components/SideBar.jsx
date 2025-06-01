import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <>
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-30 z-40"
                ></div>
            )}

            {/* 사이드바 */}
            {/* 임시 메뉴 */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-300 shadow-md transform transition-transform duration-300 z-50 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Menu - 임시</h2>
                    <nav className="flex flex-col gap-3">
                        <Link
                            to="/"
                            onClick={toggleSidebar}
                            className="hover:underline"
                        >
                            Home
                        </Link>
                        <Link
                            to="/my-videos"
                            onClick={toggleSidebar}
                            className="hover:underline"
                        >
                            My Videos
                        </Link>
                        <Link
                            to="/bookmarks"
                            onClick={toggleSidebar}
                            className="hover:underline"
                        >
                            Bookmarks
                        </Link>
                        <Link
                            to="/settings"
                            onClick={toggleSidebar}
                            className="hover:underline"
                        >
                            Settings
                        </Link>
                    </nav>
                </div>
            </aside>
        </>
    );
}
