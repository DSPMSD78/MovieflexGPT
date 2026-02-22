import { Image_base_url } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;
  return (
    <div className="w-24 sm:w-32 md:w-40 lg:w-48 pr-2 sm:pr-2 md:pr-3 lg:pr-4 flex-shrink-0">
      <img
        src={Image_base_url + movie.poster_path}
        alt="movie poster"
        className="w-full h-36 sm:h-48 md:h-56 lg:h-72 object-cover rounded hover:scale-105 transition transform cursor-pointer"
      />
      <p className="text-white text-xs sm:text-sm mt-1 truncate">
        {movie.original_title}
      </p>
    </div>
  );
};

export default MovieCard;
