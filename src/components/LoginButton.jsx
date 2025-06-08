import { HiOutlineUserCircle } from "react-icons/hi2";

export default function LoginButton() {
    return (
        <button className="w-[100px] h-[30px] px-2 flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition ml-3 bg-white dark:bg-gray-800">
            <HiOutlineUserCircle className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            <span className="text-sm text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap">
                Login
            </span>
        </button>
    );
}
