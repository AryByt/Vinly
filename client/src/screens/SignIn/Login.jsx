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
    <div className=" min-h-screen flex flex-col justify-center items-center bg-home bg-cover">
      <form
        className="lg:shadow-lg md:shadow-md rounded px-8 pt-6 pb-8 mb-4  bg-black"
        onSubmit={event => {
          event.preventDefault();
          handleLogin(formData);
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" for="username">
            Username:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            Password:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="*****"
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-red-500 hover:bg-red-700  md:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800 underline"
            to="/register"
          >
            Register?
          </Link>
        </div>
      </form>
    </div>
  );
}

//I did use a lot of the tailwind docs code on forms to style this form.
