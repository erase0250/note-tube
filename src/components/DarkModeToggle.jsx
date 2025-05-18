import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    const toggleMode = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <button
            onClick={toggleMode}
            className="p-2 rounded-full hover:bg-gray-100 transition"
        >
            {isDark ? (
                <FiMoon className="text-gray-600 w-6 h-6" />
            ) : (
                <FiSun className="text-yellow-500 w-6 h-6" />
            )}
        </button>
    );
}
