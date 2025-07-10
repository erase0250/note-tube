import Layout from "@/components/Layout";
import VideoCard from "@/components/VideoCard/VideoCard";

export default function Page() {
    const dummyArray = Array.from({ length: 21 });

    return (
        <Layout>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {dummyArray.map((_, idx) => (
                    <VideoCard
                        key={idx}
                        thumbnail="/images/dummy/video-thumbnail.jpg"
                        title={
                            "타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀"
                        }
                        channelName="채널이름"
                        views="67만회"
                        uploadedAt="1시간 전"
                        channelThumbnail="/images/dummy/channel-thumbnail.jpg"
                    />
                ))}
            </div>
        </Layout>
    );
}
