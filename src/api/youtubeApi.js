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

    async channels(params) {
        return this.httpClient.get("channels", params);
    }

    async channelImageURL(channelId) {
        const res = await this.channels({
            params: {
                part: "snippet",
                id: channelId,
            },
        });
        return res.data.items[0]?.snippet?.thumbnails?.default?.url; ///////
    }

    async getChannelInfo(channelId) {
        const res = await this.channels({
            params: {
                part: "snippet,statistics",
                id: channelId,
            },
        });
        return res.data.items[0];
    }
}
