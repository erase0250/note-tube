import { useNavigate } from "react-router-dom";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko"; // 한국어
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

register("ko", koLocale); // 한국어

export default function VideoCard({ video }) {
    const navigate = useNavigate();
    const {
        snippet: { thumbnails, title, channelTitle, publishedAt, channelId },
    } = video;

    const { youtube } = useYoutubeApi();

    const { data: channel } = useQuery({
        queryKey: ["channelThumb", channelId],
        queryFn: () => youtube.getChannelInfo(channelId),
        staleTime: 1000 * 60 * 10,
        // staleTime: 이 시간 동안 데이터를 stale(오래된 상태)로 간주하지 않음
        // -> 즉, 10분 안에는 같은 쿼리키로 요청해도 네트워크 요청 없이 캐시된 데이터 사용함
    });

    const channelThumbnail = channel?.snippet?.thumbnails?.default?.url;

    return (
        <li
            className="w-full cursor-pointer"
            onClick={() => {
                navigate(`/video/${video.id}`, { state: { video } });
            }}
        >
            <img
                className="w-full rounded-xl"
                src={thumbnails.medium.url}
                alt={title}
            />
            <div className="mt-2 flex gap-3">
                {channelThumbnail && (
                    <img
                        className="w-9 h-9 rounded-full"
                        src={channelThumbnail}
                        alt={channelTitle}
                    />
                )}
                <div className="flex flex-col">
                    <p className="font-semibold line-clamp-2">{title}</p>
                    <p className="text-sm text-gray-500">{channelTitle}</p>
                    <p className="text-xs text-gray-400">
                        {format(publishedAt, "ko")}
                    </p>
                </div>
            </div>
        </li>
    );
}
