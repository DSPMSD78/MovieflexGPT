import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestion from "./GPTSuggestion";
import backgroundImage from "../assets/background.png";

const GPTSearch = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full pt-24 sm:pt-28 md:pt-32">
        <GPTSearchBar />
        <GPTSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
