// 상세 페이지 - 해당 채널의 다른 영상 리스트

import { Link } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useEffect, useState } from "react";

export default function ChannelVideoList({ channelId }) {
    const { youtube } = useYoutubeApi();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        youtube.getChannelVideos(channelId).then(setVideos);
    }, [channelId, youtube]);

    return (
        <section className="basis-2/6 px-4">
            <ul className="space-y-2">
                {videos.map((item) => {
                    const video = item.snippet;
                    const videoId = video.resourceId?.videoId;

                    return (
                        <li key={videoId} className="flex gap-2">
                            <Link
                                to={`/video/${videoId}`}
                                state={{
                                    video: { id: videoId, snippet: video },
                                }}
                                className="flex gap-2"
                            >
                                <img
                                    className="w-40 h-35 rounded-lg"
                                    src={video.thumbnails.medium.url}
                                    alt={video.title}
                                />
                                <div className="text-sm">
                                    <p className="font-medium line-clamp-2">
                                        {video.title}
                                    </p>
                                    <p className="text-gray-500 mt-1 text-xs">
                                        {video.channelTitle}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
