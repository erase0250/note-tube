import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

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
                <p className="text-md font-medium">{name}</p>
                {subscribers && (
                    <p className="text-sm text-gray-500">
                        구독자 {Number(subscribers).toLocaleString()}명
                    </p>
                )}
            </div>
        </div>
    );
}
