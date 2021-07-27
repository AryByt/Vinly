import api from './apiConfig';

export const getAllSongs = async genreId => {
  try {
    const resp = await api.get(`/genres/${genreId}/songs`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneSong = async (genreId, songId) => {
  try {
    const resp = await api.get(`/genres/${genreId}/songs/${songId}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const postSong = async (genreId, songData) => {
  try {
    const resp = await api.post(`/genres/${genreId}/songs`, { song: songData });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateSong = async (genreId, songId, songData) => {
  try {
    const resp = await api.put(`/genres/${genreId}/songs/${songId}`, { song: songData });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSong = async songId => {
  try {
    const resp = await api.delete(`/songs/${songId}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
