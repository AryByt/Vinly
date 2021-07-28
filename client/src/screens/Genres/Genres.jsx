import { Link } from 'react-router-dom';

function Genres(props) {
  const { allGenres } = props;
  return (
    <div className="min-h-screen">
      <div className="">
        <div className="flex flex-row justify-center bg-red-500 text-white">All Genres</div>
        <div className="grid grid-cols-4 text-red-400 min-h-screen border-4 border-red-500">
          {allGenres.map((genre, index) => (
            <Link to={`/genres/${genre.id}`}>
              <div className="p-3">
                <div
                  key={index}
                  className="text-red-600 bg-gray-300 rounded shadow-lg flex flex-col content-center hover:text-red-300 m-full h-full hover:underline"
                >
                  <h4>{genre.name}</h4>
                  <img src={genre.title} alt="nada" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Genres;
