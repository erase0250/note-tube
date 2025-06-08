import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.theme === "dark"; // 초기값 불러오기
    });

    const toggleMode = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.theme = newTheme ? "dark" : "light";
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button
            onClick={toggleMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
            {isDark ? (
                <FiMoon className="text-gray-200 w-6 h-6" />
            ) : (
                <FiSun className="text-yellow-500 w-6 h-6" />
            )}
        </button>
    );
}
