import axios from "axios";

export default class YoutubeApi {
    constructor() {
        this.httpClient = axios.create({
            baseURL: "https://www.googleapis.com/youtube/v3",
            params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
        });
    }

    async videos(params) {
        return this.httpClient.get("videos", params);
    }
}
