import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestion from "./GPTSuggestion";
import backgroundImage from "../assets/background.png";

const GPTSearch = () => {
  return (
    <div
      className="w-full flex-grow bg-cover bg-center bg-fixed min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16">
        <GPTSearchBar />
        <GPTSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
