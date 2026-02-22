import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 relative z-90">
        {!movies.nowPlayingMovies ? (
          <div>Loading...</div>
        ) : (
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
        )}
        {!movies.popularMovies ? (
          <div>Loading...</div>
        ) : (
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        )}
        {!movies.topRatedMovies ? (
          <div>Loading...</div>
        ) : (
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
