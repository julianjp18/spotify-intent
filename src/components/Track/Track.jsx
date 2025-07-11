import { useEffect, useState } from "react";
import { getTracksById } from "../../services/tracks.service";
import SongCard from "../SongCard/SongCard";


const Track = ({
    artistName,
    songImage,
    albumId,
}) => {
    const [songs, setSongs] = useState(null);
    const [songPos, setSongPos] = useState(0);

    useEffect(() => {
        const getTracks = async () => {
            const data = await getTracksById(albumId);

            setSongs(data.items);
        }
        if (!songs) getTracks();
    }, [albumId]);

    const onNextAction = () => {
        if (songPos < songs.length) setSongPos(songPos + 1);
    }

    const onBackAction = () => {
        if (songPos > -1) setSongPos(songPos - 1);
    };

    console.log(songPos, 'song position')

    if (!songs) return (<div>Loading</div>);

    return (
        <div className="album__container">
            <SongCard
                artistName={artistName}
                songImage={songImage}
                onNextAction={onNextAction}
                onBackAction={onBackAction}
                song={songs[songPos]}
            />
        </div>
    );
};

export default Track;