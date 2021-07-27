import { Link } from 'react-router-dom';

function Genres(props) {
  const { allGenres } = props;
  return (
    <div>
      <h1>All Genres</h1>
      {allGenres.map((genre, index) => (
        <Link to={`/genres/${genre.id}`}>
          <div key={index}>
            <h4>{genre.name}</h4>
            <p>{genre.title}</p>
          </div>
        </Link>
      ))}
      {/* <Link to="/genres/new">
        <button>Add Genre</button>
      </Link> */}
    </div>
  );
}

export default Genres;
