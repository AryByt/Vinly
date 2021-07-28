import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GenreCreate from '../../screens/GenreCreate/GenreCreate';
function SongEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
  });

  const { name, description, buy, price, artist, img_url } = formData;
  const { allSongs, editSong } = props;
  const { songId, id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      if (allSongs.length) {
        const oneSong = allSongs.find(song => song.id === Number(songId));
        const { name, description, buy, price, artist, img_url, genre_id } = oneSong;
        setFormData({ name, description, buy, price, artist, img_url, genre_id });
      }
    };
    prefillFormData();
  }, [allSongs, songId]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    editSong(id, songId, formData);
  };

  return (
    <div className="min-h-screen bg">
      <h2>Edit Vinyl</h2>
      <form className="bg-gray-100" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Description:
          <input type="text" name="description" value={description} onChange={handleChange} />
        </label>

        <label>
          Image:
          <input type="text" name="img_url" value={img_url} onChange={handleChange} />
        </label>

        <label>
          Artist:
          <input type="text" name="artist" value={artist} onChange={handleChange} />
        </label>

        <label>
          Price:
          <input type="text" name="price" value={price} onChange={handleChange} />
        </label>

        <label>
          Link to sell:
          <input type="text" name="buy" value={buy} onChange={handleChange} />
        </label>
        <GenreCreate />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default SongEdit;
