import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function GenreDetail(props) {
  const { allSongs } = props;
  const [song, setSong] = useState(null);
  const { songId, id } = useParams();

  useEffect(() => {
    if (allSongs.length) {
      const oneSong = allSongs.find(song => song.id === Number(songId));
      setSong(oneSong);
    }
  }, [allSongs, songId]);

  return (
    <div>
      {song && (
        <>
          <h4>{song.name}</h4>
          <h4>{song.description}</h4>
          {song.songs?.map(song => (
            <Link to={`/genres/${song.id}/songs/${song.id}`}>
              <p>Name: {song.name}</p>
            </Link>
          ))}
          <Link to={`/genres/${id}/songs/${songId}/edit`}>
            <button>Edit </button>
          </Link>
          <Link to={`/genres/${id}/songs/new`}>
            <button>Add Song</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default GenreDetail;
