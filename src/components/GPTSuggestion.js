import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestion = () => {
  const movieNames = useSelector((state) => state.gpt.movieNames);
  const movieResults = useSelector((state) => state.gpt.movieResults);
  if (!movieNames.length || !movieResults.length) return null;
  return (
    <div className="p-4 m-4 bg-black rounded-lg bg-opacity-50 text-white">
      <h2 className="text-2xl font-bold mb-4">GPT Suggestions</h2>
      {movieNames.map((movie, index) =>
        movieResults[index] ? (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ) : (
          <p>No results found for {movie}</p>
        ),
      )}
    </div>
  );
};

export default GPTSuggestion;
