import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <header>
        <h1>Vinly</h1>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
        {currentUser && (
          <nav>
            <Link to="/genres">Genres</Link>
            <Link to="/Songs">Songs</Link>
          </nav>
        )}
      </header>
      {props.children}
    </div>
  );
}
