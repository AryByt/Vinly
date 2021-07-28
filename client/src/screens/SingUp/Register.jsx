import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className=" min-h-screen flex flex-col  justify-center items-center bg-home bg-cover">
      <form
        className="bg-white md:bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:text-red-800 lg:text-blue-700 md:text-purple-800"
        onSubmit={event => {
          event.preventDefault();
          handleRegister(formData);
        }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className=" my-5">
          <label className="block text-gray-700  text-sm font-bold mb-2">
            Email:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="David@gmail.com"
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 md:text-white text-sm font-bold mb-2"
            for="password"
          >
            Password:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="*****"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-red-500 hover:bg-red-700 md:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Register
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
            to="/login"
          >
            Login?
          </Link>
        </div>
      </form>
    </div>
  );
}
