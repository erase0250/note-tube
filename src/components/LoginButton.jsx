import { HiOutlineUserCircle } from "react-icons/hi2";

export default function LoginButton() {
    return (
        <button className="w-[100px] h-[30px] px-2 flex items-center gap-2 border border-gray-300 rounded-full hover:bg-gray-100 transition ml-3">
            <HiOutlineUserCircle className="w-5 h-5 text-gray-700" />
            <span className="text-sm text-gray-700 font-medium whitespace-nowrap">
                Login
            </span>
        </button>
    );
}
