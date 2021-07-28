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
    <div>
      {genre && (
        <>
          <h4>{genre.name}</h4>
          <h4>{genre.title}</h4>
          {genre.songs?.map(song => (
            <Link to={`/genres/${genre.id}/songs/${song.id}`}>
              <p>Name: {song.name}</p>
            </Link>
          ))}
          <Link to={`/genres/${id}/edit`}>
            <button>Edit Genre</button>
          </Link>
          <Link to={`/genres/${genre.id}/songs/new`}>
            <button>Add Song</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default GenreDetail;
