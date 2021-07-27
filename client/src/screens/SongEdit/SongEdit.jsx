import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SongEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
  });

  const { name, description } = formData;
  const { allSongs, editSong, removeSong } = props;
  const { songId, id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      if (allSongs.length) {
        const oneSong = allSongs.find(song => song.id === Number(songId));
        const { name, description } = oneSong;
        setFormData({ name, description });
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
    <>
      <h2>Edit Song</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={description} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
      <button onClick={() => removeSong(songId)}>Delete Song</button>
    </>
  );
}
export default SongEdit;
