import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Footer from '../screens/Footer/Footer';
export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <div className="lg:bg-black lg:text-white md:text-l md:bg-red-500 ">
        <div className="lg:w-full sm:w-1/12">
          <img className="lg:h-14 sm:h-8 md:h-10" src={logo} alt="logo" />
        </div>

        <header className="uppercase ">
          {currentUser ? (
            <div>
              <div className="flex flex-row justify-center font-extrabold hover:underline ">
                <Link to="/home">Vinly</Link>
              </div>
              <p className="flex flex-row justify-end hover:underline">{currentUser.username}</p>
              <div className="flex flex-row justify-end hover:underline">
                <button className="hover:underline" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-end">
              <Link className="px-2 hover:underline" to="/">
                Home
              </Link>
              <Link className="px-2 hover:underline" to="/login">
                Login
              </Link>
              <Link className="px-2 hover:underline" to="/register">
                Register
              </Link>
              <Link className="px-2 hover:underline" to="/register">
                AddVinyl
              </Link>
            </div>
          )}
          {currentUser && (
            <div>
              <nav className="flex flex-row justify-start">
                <Link className="px-2 hover:underline" to="/">
                  Home
                </Link>
                <Link className="px-3 hover:underline" to="/genres">
                  Genres
                </Link>
                <Link className="px-3 hover:underline" to="/songs">
                  Vinyl Records
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
