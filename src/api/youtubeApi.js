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

    async getChannelVideos(channelId, maxResults = 10) {
        // 해당 채널의 업로드 재생목록 ID 가져오기
        const res = await this.channels({
            params: {
                part: "contentDetails",
                id: channelId,
            },
        });
        const uploadsPlaylistId =
            res.data.items[0]?.contentDetails?.relatedPlaylists?.uploads;

        if (!uploadsPlaylistId) return [];

        // 업로드 재생목록에서 영상 가져오기
        const videosRes = await this.httpClient.get("playlistItems", {
            params: {
                part: "snippet",
                playlistId: uploadsPlaylistId,
                maxResults,
            },
        });

        return videosRes.data.items;
    }

    async search(params) {
        return this.httpClient.get("search", params);
    }
}
