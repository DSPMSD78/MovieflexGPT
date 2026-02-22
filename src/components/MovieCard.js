import { Image_base_url } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;
  return (
    <div className="w-48 pr-4 flex-shrink-0">
      <img
        src={Image_base_url + movie.poster_path}
        alt="movie poster"
        className="w-full h-72 object-cover rounded"
      />
      <p className="text-white text-sm mt-2 truncate">{movie.original_title}</p>
    </div>
  );
};

export default MovieCard;
