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
    <div className=" min-h-screen flex flex-col justify-center items-center bg-home bg-cover">
      <h2>Add Song</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 md:text-black text-sm font-bold mb-2">
            Name:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 md:text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className=" my-5">
          <label className="block text-gray-700  text-sm font-bold mb-2" for="Description">
            Description:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700  text-sm font-bold mb-2" for="Image">
            Image:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="img_url"
              value={img_url}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700  text-sm font-bold mb-2" for="Artist">
            Artist:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="artist"
              value={artist}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700  text-sm font-bold mb-2" for="Price">
            Price:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700  text-sm font-bold mb-2" for="Price">
            Link to sell:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="buy"
              value={buy}
              onChange={handleChange}
            />
          </label>
        </div>
        <GenreCreate />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default SongCreate;
