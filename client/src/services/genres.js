import api from './apiConfig';

export const getAllGenre = async () => {
  try {
    const resp = await api.get('/genres');
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneGenre = async id => {
  try {
    const resp = await api.get(`/genres/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const postGenre = async zooData => {
  try {
    const resp = await api.post('/genres', { genre: zooData });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const putGenre = async (id, genreData) => {
  try {
    const resp = await api.put(`/genres/${id}`, { genre: genreData });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteGenre = async id => {
  try {
    const resp = await api.delete(`/genres/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
