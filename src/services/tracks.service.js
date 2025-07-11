
import { getTracksByAlbumId as getSpotifyTracksById } from '../api/spotify';

export const getTracksById = async (albumId) => {
    if (!albumId) throw Error('album ID required');

    try {
        const response = await getSpotifyTracksById(albumId);
    
        return response;
    } catch (err) {
        console.err(err);
        throw Error(err);
    }
}