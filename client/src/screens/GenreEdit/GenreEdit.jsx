import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GenreEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
  });

  const { name, city } = formData;
  const { allGenres, updateGenre, removeGenre } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      if (allGenres.length) {
        const oneGenre = allGenres.find(genre => genre.id === Number(id));
        const { name, city } = oneGenre;
        setFormData({ name, city });
      }
    };
    prefillFormData();
  }, [allGenres, id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateGenre(id, formData);
  };

  return (
    <>
      <h2>Edit Genre</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={city} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
      <button onClick={() => removeGenre(id)}>Delete Genre</button>
    </>
  );
}
export default GenreEdit;
