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
    <div className="bg-home bg-cover">
      <div className="">
        {song && (
          <div>
            <div className="p-10 justify-center flex">
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full b" src={song.img_url} alt={song.name} />
                <div classNae="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Vinyl :{song.name}</div>
                  <h4>{song.description}</h4>
                </div>
                <div className="px-6 pt-4 pb-2 bg-black">
                  <span className="inline-block bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-10 mb-2">
                    Artis: {song.artist}
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
            <div className="flex flex-row justify-evenly mt-10">
              <Link to={`/genres/${id}/songs/${songId}/edit`}>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
                  Edit
                </button>
              </Link>
              <Link to={`/genres/${id}/songs/new`}>
                <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-white hover:border-white rounded">
                  AddVinyl
                </button>
              </Link>
              <button
                className=" bg-red-600 hover:bg-red-500 text-black font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-400 rounded"
                onClick={() => removeSong(songId)}
              >
                Delete Song
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenreDetail;
