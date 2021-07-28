import { Link } from 'react-router-dom';

function Genres(props) {
  const { allGenres } = props;
  return (
    <div>
      <h1 className="flex flex-row justify-center bg-gray-100">All Genres</h1>
      <div className="flex flex-row justify-evenly bg-red-300">
        {allGenres.map((genre, index) => (
          <Link to={`/genres/${genre.id}`}>
            <div key={index}>
              <h4>{genre.name}</h4>
              <p>{genre.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Genres;
