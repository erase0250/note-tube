import Image from "next/image";

interface VideoCardProps {
    thumbnail: string;
    title: string;
    channelName: string;
    channelThumbnail: string;
    views: string;
    uploadedAt: string;
}

export default function VideoCard({
    thumbnail,
    title,
    channelName,
    channelThumbnail,
    views,
    uploadedAt,
}: VideoCardProps) {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white">
            <div className="relative w-full h-52 2xl:h-[296px]">
                <Image
                    src={thumbnail}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-2">
                <div className="flex items-start gap-2">
                    {channelThumbnail && (
                        <Image
                            src={channelThumbnail}
                            alt={channelName}
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    )}
                    <div>
                        <h3 className="font-medium text-sm text-main line-clamp-2 mb-1">
                            {title}
                        </h3>
                        <p className="text-xs text-secondary mb-1">
                            {channelName}
                        </p>
                        <p className="text-xs text-secondary">
                            조회수 {views} • {uploadedAt}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
