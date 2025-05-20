import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";
import VideoDetail from "./pages/VideoDetail.jsx";
import { YoutubeApiProvider } from "./context/YoutubeApiContext.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Main /> }, // 메인 페이지
            { path: "video/:videoId", element: <VideoDetail /> }, // 상세 페이지
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <YoutubeApiProvider>
            <RouterProvider router={router} />
        </YoutubeApiProvider>
    </StrictMode>
);
