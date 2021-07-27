import { Link } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react'; ////
import Song from '../components/Song';
import { getSongs } from '../services/songs';

export default function Species(props) {
  const { songList, handleDelete } = props;
  const [song, setSong] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      const allSongs = await getSongs();
      setSong(allSongs);
    };
    fetchSongs();
  }, []);

  return (
    <>
      <div className="">
        {song.map((song, index) => {
          return (
            <div key={index}>
              <Song
                // id={id}
                // img_url={img_url}
                // genre={genre.name}
                // name={name}
                // key={index}
                song={song}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
