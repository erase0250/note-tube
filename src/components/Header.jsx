import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <header className="w-full h-24 bg-gray-100 flex p-4 border-b border-zinc-600">
            <Link to="/" className="flex items-center">
                <h1 className="text-5xl">LOGO</h1>
            </Link>
            <SearchBar />
        </header>
    );
}
