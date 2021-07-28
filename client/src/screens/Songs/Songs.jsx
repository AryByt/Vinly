import React from 'react';

export default function Songs(props) {
  return (
    <div>
      {props.allSongs.map(song => (
        <div key={song.id}>
          <p> {song.name}</p>
        </div>
      ))}
    </div>
  );
}
