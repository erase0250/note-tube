import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

// 구독자 수 포맷 함수
function formatSubscribers(subscriberCount) {
    const count = Number(subscriberCount);
    if (count >= 10000) {
        return `${Math.floor(count / 10000)}만명`;
    } else if (count >= 1000) {
        return `${(count / 10000).toFixed(1)}만명`;
    } else {
        return `${count.toLocaleString()}명`;
    }
}
export default function ChannelInfo({ id, name }) {
    const { youtube } = useYoutubeApi();
    const { data: channel } = useQuery({
        queryKey: ["channelInfo", id],
        queryFn: () => youtube.getChannelInfo(id),
    });

    const thumbnail = channel?.snippet?.thumbnails?.default?.url;
    const subscribers = channel?.statistics?.subscriberCount;

    return (
        <div className="flex items-center my-2 mb-3 gap-2">
            {thumbnail && (
                <img
                    className="w-10 h-10 rounded-full"
                    src={thumbnail}
                    alt={name}
                />
            )}
            <div className="flex flex-col">
                <p className="font-medium">{name}</p>
                {subscribers && (
                    <p className="text-xs text-gray-500">
                        구독자 {formatSubscribers(subscribers)}
                    </p>
                )}
            </div>
        </div>
    );
}
