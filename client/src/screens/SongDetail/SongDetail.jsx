import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';

function GenreDetail(props) {
  const { allSongs, removeSong } = props;
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
      <div>
        {song && (
          <div>
            <div className="p-10 justify-center flex">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full b" src={song.img_url} alt={song.name} />
                <div classNae="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{song.name}</div>
                  <h4>{song.description}</h4>
                </div>
                <div className="px-6 pt-4 pb-2 bg-black">
                  <span className="inline-block bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-10 mb-2">
                    {song.artist}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ml-10 mb-2">
                    ${song.price}
                  </span>
                </div>
              </div>
            </div>

            <a href={song.buy} target="_blank" rel="noreferrer">
              <Button text="Buy" />
            </a>

            {song.songs?.map(song => (
              <Link to={`/genres/${song.id}/songs/${song.id}`}>
                <p>Name: {song.name}</p>
              </Link>
            ))}
            <div className="flex flex-row justify-evenly">
              <Link to={`/genres/${id}/songs/${songId}/edit`}>
                <button>Edit</button>
              </Link>
              <Link to={`/genres/${id}/songs/new`}>
                <button>AddVinyl</button>
              </Link>
              <button onClick={() => removeSong(songId)}>Delete Song</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenreDetail;
