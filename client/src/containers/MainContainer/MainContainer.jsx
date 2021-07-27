import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Genres from '../../screens/Genres/Genres';
import GenreDetail from '../../screens/GenreDetail/GenreDetail';
import SongEdit from '../../screens/SongEdit/SongEdit';
import { getAllGenre, deleteGenre } from '../../services/genres';
import { getAllSongs, deleteSong, postSong, putSong } from '../../services/songs';
import SongCreate from '../../screens/SongCreate/SongCreate';
export default function MainContainer() {
  const [allGenres, setAllGenres] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchGenres();
  }, []);
  const fetchGenres = async () => {
    const genres = await getAllGenre();
    setAllGenres(genres);
  };
  const createSong = async (genre_id, formData) => {
    const newSong = await postSong(genre_id, formData);
    setAllGenres(prevState =>
      prevState.map(genre =>
        genre.id === Number(genre_id)
          ? {
              ...genre,
              songs: [...genre.songs, newSong],
            }
          : genre
      )
    );
    history.push('/genres');
  };

  const editSong = async (genre_id, formData) => {
    const newSong = await putSong(genre_id, formData);
    setAllGenres(prevState =>
      prevState.map(genre =>
        genre.id === Number(genre_id)
          ? {
              ...genre,
              songs: [...genre.songs, newSong],
            }
          : genre
      )
    );
    history.push('/genres');
  };

  return (
    <Switch>
      <Route path="/genres/:id/songs/edit">
        <SongEdit editSong={editSong} />
      </Route>
      <Route path="/genres/:id/songs/new">
        <SongCreate createSong={createSong} />
      </Route>
      <Route path="/genres/:id">
        <GenreDetail allGenres={allGenres} />
      </Route>
      <Route path="/genres">
        <Genres allGenres={allGenres} />
      </Route>
    </Switch>
  );
}
