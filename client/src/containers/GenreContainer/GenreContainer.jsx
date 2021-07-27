import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllGenre, deleteGenre, postGenre, putGenre } from '../../services/genres';
import { postSong } from '../../services/songs';
import Genres from '../../screens/Genres/Genres';
import GenreDetail from '../../screens/GenreDetail/GenreDetail';
import GenreCreate from '../../screens/GenreCreate/GenreCreate';
import GenreEdit from '../../screens/GenreEdit/GenreEdit';
export default function GenreContainer() {
  const [allGenres, setAllGenres] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const genres = await getAllGenre();
    setAllGenres(genres);
  };

  const updateGenre = async (id, formData) => {
    const updatedGenre = await putGenre(id, formData);
    setAllGenres(prevState =>
      prevState.map(genre => (genre.id === Number(id) ? updatedGenre : genre))
    );
    history.push(`/genres/${id}`);
  };
  const createGenre = async formData => {
    const newGenre = await postGenre(formData);
    setAllGenres(prevState => [...prevState, newGenre]);
    history.push('/genres');
  };

  const removeGenre = async id => {
    await deleteGenre(id);
    setAllGenres(prevState => prevState.filter(genre => genre.id !== Number(id)));
  };
  const createSong = async (genreId, formData) => {
    const newSong = await postSong(genreId, formData);
    if (newSong) {
      const newSongGenre = allGenres.find(genre => genre.id === Number(genreId));
      newSongGenre.songs.push(newSong);
      setAllGenres(prevState =>
        prevState.map(genre => (genre.id === genreId ? newSongGenre : genre))
      );
    }
    history.push('/genres');
  };

  return (
    <div>
      <Switch>
        <Route exact path="/genres">
          <Genres allGenres={allGenres} />
        </Route>
        <Route exact path="/genres/new">
          <GenreCreate createGenre={createGenre} />
        </Route>
        <Route exact path="/genres/:id">
          <GenreDetail allGenres={allGenres} />
        </Route>
        <Route exact path="/genres/:id/edit">
          <GenreEdit allGenres={allGenres} updateGenre={updateGenre} removeGenre={removeGenre} />
        </Route>
      </Switch>
    </div>
  );
}
