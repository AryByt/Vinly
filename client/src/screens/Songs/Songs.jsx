import React from 'react';
import { Link } from 'react-router-dom';
export default function Songs(props) {
  return (
    <div className="mt-5 grid grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-4 min-h-screen ">
      {props.allSongs.map(song => (
        <div className="p-3">
          <div className="text-white rounded shadow-lg flex flex-col content-center hover:text-red-50  hover:underline">
            <div key={song.id}>
              <img src={song.img_url} alt="Not Available" />
            </div>
            <div className="px-2 py-4 bg-black">
              <Link
                className="font-bold mb-1 text-red-400"
                to={`/genres/${song.id}/songs/${song.id}`}
              >
                {song.name}
              </Link>
              <p>${song.price}</p>
            </div>
            <div className="text-black">{song.artist}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
