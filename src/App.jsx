import { Outlet } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <YoutubeApiProvider>
                    <Header />
                    <Outlet />
                </YoutubeApiProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
