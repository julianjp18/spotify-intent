
import { getAlbumById as getSpotifyAlbumId } from '../api/spotify';

export const getAlbumById = async (albumId) => {
    if (!albumId) throw Error('album ID required');

    try {
        const response = await getSpotifyAlbumId(albumId);
    
        return response;
    } catch (err) {
        console.err(err);
        throw Error(err);
    }
}