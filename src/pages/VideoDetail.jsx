import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import ChannelVideoList from "../components/ChannelVideoList";

export default function VideoDetail() {
    const {
        state: { video },
    } = useLocation();
    const { title, channelId, channelTitle, description } = video.snippet;

    return (
        <section className="flex flex-col lg:flex-row px-5 py-1">
            <article className="basis-4/6">
                <iframe
                    className="rounded-xl"
                    id="player"
                    type="text/html"
                    width="100%"
                    height="580"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    style={{ border: "none" }}
                    title={title}
                />
                <div>
                    <h2 className="text-xl font-bold mt-3">{title}</h2>
                    <ChannelInfo id={channelId} name={channelTitle} />
                    <div className="bg-gray-200 rounded-xl p-5 text-sm font-youtube">
                        {description}
                    </div>
                </div>
            </article>
            <ChannelVideoList channelId={channelId} />
        </section>
    );
}
