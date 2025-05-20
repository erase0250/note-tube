import { createContext, useContext } from "react";
import YoutubeAPI from "../api/youtubeAPI";

const Youtube = new YoutubeAPI();
const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
    return (
        <YoutubeApiContext.Provider value={{ youtube: Youtube }}>
            {children}
        </YoutubeApiContext.Provider>
    );
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}
