import { Link } from 'react-router-dom';

function Genres(props) {
  const { allGenres } = props;
  return (
    <div className="min-h-screen">
      <div className="">
        <div className="flex flex-row justify-center bg-red-500 text-white">All Genres</div>
        <div>
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
    </div>
  );
}

export default Genres;
