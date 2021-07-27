import { useState } from 'react';

function CreateGenre(props) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
  });

  const { name, title } = formData;
  const { createGenre } = props;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    createGenre(formData);
  };

  return (
    <>
      <h2>Add Genre</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="city" value={title} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
export default CreateGenre;
