import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

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
        handleLogin(formData);
      }}
    >
      <h1>Login</h1>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>
      <Link to="/register">Register</Link>
      <button>Submit</button>
    </form>
  );
}
