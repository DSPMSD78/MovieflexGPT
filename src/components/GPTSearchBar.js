import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
// import openAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { setSuggestions } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const config = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    return data.results;
  };

  const handleSearch = async () => {
    // const query =
    //   "Act as a movie expert and provide a list of movies for the query: " +
    //   searchText.current.value +
    //   ". only provide the names of 5 movies, coma separated like the example: Movie1, Movie2, Movie3, Movie4, Movie5. do not provide any other information except the names of the movies.";

    // const getResults = await openAI.chat.completions.create({
    //   model: "gpt-5.2",
    //   temperature: 0.6,
    //   messages: [{ role: "user", content: query }],
    // });
    if (!searchText.current.value) return;
    const movies = [
      "Interstellar",
      "Fight Club",
      "Inception",
      "War",
      "Dark Knight",
    ];

    const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

    const TMDBResults = await Promise.all(promiseArray);
    console.log("TMDBResults", TMDBResults);
    dispatch(setSuggestions({ movieNames: movies, movieResults: TMDBResults }));
  };

  return (
    <div className="mx-auto px-4 py-6 rounded-lg">
      <div className="mt-20">
        <form className="w-1/2 mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            ref={searchText}
            placeholder={lang[config].placeholder}
            className="w-8/12 mr-2 px-4 py-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            onClick={handleSearch}
            className="bg-red-600 w-3/12 text-white px-4 py-4 rounded-lg hover:bg-red-700"
          >
            {lang[config].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
