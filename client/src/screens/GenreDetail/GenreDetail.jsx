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
    <div className="min-h-screen ">
      <div className="flex flex-row justify-center b text-black">
        <div className="grid grid-cols-4  min-h-screen b">
          {genre && (
            <div className="p-3">
              <h4 className="pb-5">{genre.name}</h4>
              <img src={genre.title} className="" alt="nada" />
              {genre.songs?.map(song => (
                <Link to={`/genres/${genre.id}/songs/${song.id}`}>
                  <p>{song.name}</p>
                </Link>
              ))}
              <Link to={`/genres/${genre.id}/songs/new`}>
                <button>Add Song</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GenreDetail;
