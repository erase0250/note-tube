import { Outlet } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <YoutubeApiProvider>
                <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
                    <Header />
                    <Outlet />
                </div>
            </YoutubeApiProvider>
        </QueryClientProvider>
    );
}

export default App;
