import { useParams, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllSongs } from '../../services/songs';

import { getOneSong, putSong } from '../../services/songs';

const SongEdit = props => {
  const [genres, setGenres] = useState([]);

  const [song, setSong] = useState({
    name: '',
    description: '',
    img_url: '',
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      const song = await getOneSong(id);
      setSong(song);
    };
    fetchSong();
  }, [id]);

  const handleChange = event => {
    const { name, value } = event.target;
    setSong({
      ...song,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchDropDowns = async () => {
      const genres = await getAllSongs();

      setGenres(genres);
    };
    fetchDropDowns();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    const updated = await putSong(id, song);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/songs/:id`} />;
  }

  return (
    <>
      <form
        className="flex space-y-6 flex-col justify-center items-center border-8 border-black-100 mb-52 bg-green-500"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <input
          className="mt-5 bg-green-200"
          placeholder="name"
          value={song.name}
          name="name"
          required
        />
        <input
          className="mt-5 bg-green-200"
          placeholder="Image Link"
          value={song.img_url}
          name="img_url"
        />
        <input
          className="mt-5 bg-green-200"
          placeholder="description"
          value={song.description}
          name="description"
          required
        />

        <select name="genre_id">
          <option default hidden required>
            select the genre
          </option>
          {genres && genres.map(genre => <option value={genre.id}>{genre.name}</option>)}
        </select>

        <button type="submit" className="create-button">
          Edit
        </button>
      </form>
    </>
  );
};

export default SongEdit;
