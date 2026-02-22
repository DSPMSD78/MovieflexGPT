import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || !movies.length) return null;
  return (
    <div className="px-2 sm:px-3 md:px-4 lg:px-6 mt-1 sm:mt-2 md:mt-4">
      <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-4 lg:py-6 text-white font-bold">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
