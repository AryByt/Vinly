import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Genres from '../../screens/Genres/Genres';
import GenreDetail from '../../screens/GenreDetail/GenreDetail';
import SongEdit from '../../screens/SongEdit/SongEdit';
import { getAllGenre, deleteGenre } from '../../services/genres';
import { getAllSongs, deleteSong, postSong, updateSong } from '../../services/songs';
import SongCreate from '../../screens/SongCreate/SongCreate';
import SongDetail from '../../screens/SongDetail/SongDetail';

export default function MainContainer() {
  const [allGenres, setAllGenres] = useState([]);
  const [allSongs, setAllSongs] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetchGenres();
  }, []);
  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchGenres = async () => {
    const genres = await getAllGenre();
    setAllGenres(genres);
  };
  const fetchSongs = async () => {
    const songs = await getAllSongs();
    setAllSongs(songs);
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

  const removeSong = async songId => {
    await deleteSong(songId);

    fetchSongs();
    fetchGenres();
    history.push('/genres');
  };

  const editSong = async (genreId, songId, formData) => {
    const updatedSong = await updateSong(genreId, songId, formData);
    console.log(updatedSong);
    // setAllGenres(prevState =>
    //   prevState.map(genre =>
    //     genre.id === Number(genreId)
    //       ? {
    //           ...genre,
    //           songs: genre.songs.map(song => {
    //             return song.id === songId ? updatedSong : song;
    //           }),
    //         }
    //       : genre
    //   )
    // );
    fetchSongs();
    fetchGenres();
    history.push(`/genres/${genreId}`);
  };
  console.log(allGenres);
  return (
    <Switch>
      <Route path="/genres/:id/songs/:songId/edit">
        <SongEdit allSongs={allSongs} editSong={editSong} removeSong={removeSong} />
      </Route>
      <Route path="/genres/:id/songs/new">
        <h1>Hello</h1>
        <SongCreate createSong={createSong} />
      </Route>
      <Route path="/genres/:id/songs/:songId">
        <SongDetail allSongs={allSongs} />
      </Route>
      <Route path="/genres/:id">
        {console.log(allGenres)}
        <GenreDetail allGenres={allGenres} />
      </Route>
      <Route path="/genres">
        <Genres allGenres={allGenres} />
      </Route>
    </Switch>
  );
}