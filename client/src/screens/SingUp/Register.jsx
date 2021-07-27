import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleRegister(formData);
      }}
    >
      <h1>Register</h1>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
