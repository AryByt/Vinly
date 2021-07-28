import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        <button className="p-4 px-6 border-red-700 border-2 bg-red-500 rounded-full text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
export default SongEdit;
