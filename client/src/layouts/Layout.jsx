import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Footer from '../screens/Footer/Footer';
export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <div className="bg-black text-white text-xl flex flex-col lg:flex lg:flex-row lg:justify-evenly">
        <div className="w-full">
          <img className="h-14" src={logo} alt="logo" />
        </div>

        <header className="">
          {currentUser ? (
            <div className="flex flex-row justify-evenly">
              <Link className="px-2" to="/">
                Vinly
              </Link>
              <div className="flex flex-row ">
                <p className="p-4">{currentUser.username}</p>
                <button className="p-4" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-end">
              <Link className="px-2" to="/">
                Home
              </Link>
              <Link className="px-2" to="/login">
                Login
              </Link>
              <Link className="px-2" to="/register">
                Register
              </Link>
              <Link className="px-2" to="/register">
                AddVinyl
              </Link>
            </div>
          )}
          {currentUser && (
            <nav className="flex flex-row text-center justify-center">
              <Link className="px-2" to="/genres">
                Genres
              </Link>
              <Link className="px-2" to="/songs">
                Vinyls
              </Link>
            </nav>
          )}
        </header>
      </div>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
