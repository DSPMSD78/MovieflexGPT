import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || !movies.length) return null;
  return (
    <div className="px-6 mt-4">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
