import { useState } from 'react';

function CreateGenre(props) {
  const [formData, setFormData] = useState({
    name: '',
  });

  const { name } = formData;
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
          Genre:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
export default CreateGenre;
