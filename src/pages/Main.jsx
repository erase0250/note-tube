import { useParams } from "react-router-dom";
import VideoCardList from "../components/VideoCardList";

export default function Main() {
    const { keyword } = useParams();

    return (
        <>
            <VideoCardList keyword={keyword} />
        </>
    );
}
