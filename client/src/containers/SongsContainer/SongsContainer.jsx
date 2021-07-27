import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllSongs, deleteSong, postSong, putSong } from '../../services/songs';
import SongCreate from '../../screens/SongCreate/SongCreate';

export default function GenreContainer() {
  const [allSongs, setAllSongs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const songs = await getAllSongs();
    setAllSongs(songs);
  };

  const createSong = async (genre_id, formData) => {
    const newSong = await postSong(genre_id, formData);
    setAllSongs(prevState => [...prevState, newSong]);
    history.push('/genres');
  };

  return (
    <div>
      <Switch>
        <Route exact path="/genres/:genre_id/songs/new">
          <SongCreate createSong={createSong} />
        </Route>
      </Switch>
    </div>
  );
}
