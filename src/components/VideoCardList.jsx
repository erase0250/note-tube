import { useEffect, useState } from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function VideoCardList({ keyword }) {
    const [videos, setVideos] = useState([]);
    const { youtube } = useYoutubeApi();

    useEffect(() => {
        if (keyword) {
            // 검색 결과 영상 요청
            youtube
                .search({
                    params: {
                        part: "snippet",
                        maxResults: 25,
                        q: keyword,
                        type: "video",
                    },
                })
                .then((res) => setVideos(res.data.items))
                .catch((err) => console.error("검색 API 에러", err));
        } else {
            // 인기 영상 요청
            youtube
                .videos({
                    params: {
                        part: "snippet,contentDetails,statistics",
                        chart: "mostPopular",
                        regionCode: "KR",
                        maxResults: 20,
                    },
                })
                .then((res) => setVideos(res.data.items))
                .catch((err) => console.error("인기영상 API 에러", err));
        }
    }, [youtube, keyword]);

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
            {videos.map((video) => {
                const id = video.id.videoId || video.id; // 문자열 ID
                return (
                    <VideoCard
                        key={id}
                        video={{
                            ...video,
                            id,
                        }}
                    />
                );
            })}
        </ul>
    );
}
