import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-14 sm:-mt-20 md:-mt-28 lg:-mt-36 relative z-10 pb-4">
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
