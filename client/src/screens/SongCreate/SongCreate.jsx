import { useState } from 'react';
import { useParams } from 'react-router-dom';
import GenreCreate from '../../screens/GenreCreate/GenreCreate';

function SongCreate(props) {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    buy: '',
    price: null,
    artist: '',

    genre_id: id,
  });

  const { name, description, genre_id, img_url, buy, price, artist } = formData;
  const { createSong } = props;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    createSong(genre_id, formData);
  };

  return (
    <div className="min-h-screen bg">
      <h2>Add Song</h2>
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
export default SongCreate;
