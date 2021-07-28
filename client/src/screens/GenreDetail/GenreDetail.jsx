import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function GenreDetail(props) {
  const { allGenres } = props;
  const [genre, setGenre] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (allGenres.length) {
      const oneGenre = allGenres.find(genre => genre.id === Number(id));
      setGenre(oneGenre);
    }
  }, [allGenres, id]);

  return (
    <div className="min-h-screen bg-home bg-cover ">
      <div className="flex flex-row justify-center text-black">
        <div className="grid grid-cols-1  min-h-screen ">
          {genre && (
            <div className="p-3">
              <h4 className="pb-5 bg-red-200">{genre.name}</h4>
              <img src={genre.title} className="bg-red-300" alt="nada" />
              {genre.songs?.map(song => (
                <Link to={`/genres/${genre.id}/songs/${song.id}`}>
                  <p className="bg-red-500 text-xl text-white">{song.name}</p>
                </Link>
              ))}
              <Link to={`/genres/${genre.id}/songs/new`}>
                <button className="p-4 px-6 border-red-700 border-2 bg-black rounded-full text-white mt-5">
                  Add Song
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GenreDetail;
