export default function VideoCard() {
    // 더미데이터
    const dummy = {
        img: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww",
        title: "영상 타이틀",
        channel: "채널 이름",
        date: "3일 전",
    };

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
            {Array.from({ length: 25 }).map((_, i) => (
                <li key={i} className="w-full">
                    <img
                        className="w-full rounded-xl"
                        src={dummy.img}
                        alt="썸네일"
                    />
                    <div>
                        <p className="font-semibold my-1 line-clamp-2">
                            {dummy.title}
                        </p>
                        <p className="text-sm opacity-80">{dummy.channel}</p>
                        <p className="text-sm opacity-80">{dummy.date}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
