import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";
import VideoDetail from "./pages/VideoDetail.jsx";

// 페이지 최초 로딩 시 다크모드 설정
if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Main /> }, // 메인 페이지
            { path: "search/:keyword", element: <Main /> }, // 검색 시 보여주는 메인 페이지
            { path: "video/:videoId", element: <VideoDetail /> }, // 상세 페이지
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
