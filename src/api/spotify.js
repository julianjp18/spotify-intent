import { SPOTIFY_AUTH_TOKEN } from "../utils/const";

const BASE_URL = "https://api.spotify.com/v1";

const HEADERS = {
  Authorization: `Bearer ${SPOTIFY_AUTH_TOKEN}`,
};

export const getAlbumById = async (albumId) => {
  if (!albumId) return [];
  const url = BASE_URL + `/albums/${albumId}`;
  const response = await fetch(url, {
    headers: HEADERS,
  });

  const data = response.json();
  if (!data) return [];

  return data;
};

export const getTracksByAlbumId = async (albumId) => {
  if (!albumId) return [];
  const url = BASE_URL + `/albums/${albumId}/tracks`;
  const response = await fetch(url, {
    headers: HEADERS,
  });

  const data = response.json();
  if (!data) return [];

  return data;
};
