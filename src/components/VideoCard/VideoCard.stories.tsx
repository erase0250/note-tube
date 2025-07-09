import type { Meta, StoryObj } from "@storybook/react";
import VideoCard from "./VideoCard";

const meta: Meta<typeof VideoCard> = {
    title: "Components/VideoCard",
    component: VideoCard,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof VideoCard>;

export const Default: Story = {
    // args 값들은 컴포넌트 props로 바로 전달됨
    args: {
        thumbnail: "/images/dummy/video-thumbnail.jpg",
        title: "영상타이틀제목제목영상타이틀제목제목영상타이틀제목제목영상타이틀제목제목제목제목제목제목",
        channelName: "채널이름",
        channelThumbnail: "/images/dummy/channel-thumbnail.jpg",
        views: "67만회",
        uploadedAt: "1시간 전",
    },
};
