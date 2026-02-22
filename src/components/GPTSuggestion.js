import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestion = () => {
  const movieNames = useSelector((state) => state.gpt.movieNames);
  const movieResults = useSelector((state) => state.gpt.movieResults);
  if (!movieNames.length || !movieResults.length) return null;
  return (
    <div className="p-3 sm:p-4 md:p-6 mx-3 sm:mx-4 md:mx-6 my-3 sm:my-4 md:my-6 bg-black rounded-lg bg-opacity-50 text-white overflow-x-hidden">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
        GPT Suggestions
      </h2>
      {movieNames.map((movie, index) =>
        movieResults[index] ? (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ) : (
          <p className="text-sm sm:text-base">No results found for {movie}</p>
        ),
      )}
    </div>
  );
};

export default GPTSuggestion;
