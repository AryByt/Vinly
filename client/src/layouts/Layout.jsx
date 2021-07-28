import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <div className="bg-black text-white text-xl">
        <img className="w-12 h-12 flex object-contain" src={logo} alt="logo" />

        <header className="">
          {currentUser ? (
            <div className="flex flex-row justify-between">
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
              <Link className="px-2" to="/login">
                Login
              </Link>
              <Link className="px-2" to="/register">
                Register
              </Link>
              <Link className="px-2" to="/register">
                Add Vinyl
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
    </div>
  );
}
