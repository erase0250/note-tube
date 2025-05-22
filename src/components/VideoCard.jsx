import { useNavigate } from "react-router-dom";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko"; // 한국어

register("ko", koLocale); // 한국어

export default function VideoCard({ video }) {
    const navigate = useNavigate();

    const {
        snippet: { thumbnails, title, channelTitle, publishedAt },
    } = video;

    return (
        <li
            className="w-full"
            onClick={() => {
                navigate(`video/${video.id}`, { state: { video } });
            }}
        >
            <img
                className="w-full rounded-xl"
                src={thumbnails.medium.url}
                alt={title}
            />
            <div>
                <p className="font-semibold my-1 line-clamp-2">{title}</p>
                <p className="text-sm opacity-80">{channelTitle}</p>
                <p className="text-sm opacity-80">
                    {format(publishedAt, "ko")}
                </p>
            </div>
        </li>
    );
}
