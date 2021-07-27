import { useState } from 'react';
import { useParams } from 'react-router-dom';

function SongCreate(props) {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    genre_id: id,
  });

  const { name, description, genre_id } = formData;
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
    <>
      <h2>Add Song</h2>
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
    </>
  );
}
export default SongCreate;
