import { useEffect, useState } from "react";
import { getAlbumById } from "../../services/albums.service";
import Track from "../Track/Track";
import { ALBUM_ID } from "../../utils/const";


const Album = () => {
    const [album, setAlbum] = useState({});

    useEffect(() => {
        const getAlbum = async () => {
            const data = await getAlbumById(ALBUM_ID);
            console.log(data);
            setAlbum(data);
        }
        getAlbum();
    }, []);

    if (!album) return (<div>Loading...</div>);

    return (
        <div className="album__container">
            <Track artistName={album?.artists[0]?.name ?? 'N/A'} songImage={album?.images[0]?.url} albumId={ALBUM_ID} />
        </div>
    );
};

export default Album;