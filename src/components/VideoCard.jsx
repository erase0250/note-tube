import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko"; // 한국어

register("ko", koLocale); // 한국어

export default function VideoCard({ video }) {
    // 더미데이터
    // const dummy = {
    //     img: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww",
    //     title: "영상 타이틀",
    //     channel: "채널 이름",
    //     date: "3일 전",
    // };

    const {
        snippet: { thumbnails, title, channelTitle, publishedAt },
    } = video;

    return (
        <li className="w-full">
            <img
                className="w-full rounded-xl"
                src={thumbnails.medium.url}
                alt="썸네일"
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
