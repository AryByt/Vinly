import { useState, useEffect } from 'react';

import { getOneSong, deleteSong } from '../services/species';
import { useParams, Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

const SongDetail = props => {
  const [song, setSong] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const fetchSong = async () => {
      const song = await getOneSong(id);
      setSong(song);
      setLoaded(true);
    };
    fetchSong();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = async () => {
    const res = await deleteSong(id);
    console.log(res);
    history.push('/songs');
  };
  return (
    <>
      <div>
        <img src={song.img_url} alt={song.name} />

        <div>
          <div>
            <div>{song.name}</div>
            <div>{song.description}</div>
            <div>{song.genre}</div>
          </div>
          <div>
            <Link to={`/songs/${song.id}/edit`}>Edit</Link>
            <button onClick={() => deleteSong(song.id)} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongDetail;
