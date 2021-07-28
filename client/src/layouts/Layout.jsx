import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Footer from '../screens/Footer/Footer';
export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <div className="bg-black text-white">
        <div className="w-full">
          <img className="h-14" src={logo} alt="logo" />
        </div>

        <header className="uppercase">
          {currentUser ? (
            <div>
              <div className="flex flex-row justify-center font-extrabold">
                <Link to="/home">Vinly</Link>
              </div>
              <p className="flex flex-row justify-end ">{currentUser.username}</p>
              <div className="flex flex-row justify-end">
                <button className="" onClick={handleLogout}>
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
            <div>
              <nav className="flex flex-row justify-start">
                <Link className="px-2" to="/">
                  Home
                </Link>
                <Link className="px-3" to="/genres">
                  Genres
                </Link>
                <Link className="px-3" to="/songs">
                  Vinyls
                </Link>
              </nav>
            </div>
          )}
        </header>
      </div>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
