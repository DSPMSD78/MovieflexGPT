import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { logoutUser } from "../utils/userSlice";
import { clearSuggestions, toggleGPTSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const lang = useSelector((store) => store.config.lang);

  const handleSearch = () => {
    dispatch(toggleGPTSearch());
    dispatch(clearSuggestions());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(logoutUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="flex cursor-pointer items-center"
          onClick={() => navigate("/")}
        >
          <h1
            className="text-red-600 font-extrabold text-2xl sm:text-3xl tracking-tighter uppercase italic"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              transform: "scaleY(1.4) scaleX(0.9)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Movieflex<span className="text-white">GPT</span>
          </h1>
        </div>

        {user && (
          <div className="flex items-center space-x-3">
            {showGPTSearch && (
              <select
                value={lang}
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={(e) => handleLangChange(e)}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="hidden sm:inline-block bg-white text-black font-bold px-3 py-1 rounded-lg hover:opacity-50"
              onClick={handleSearch}
            >
              {showGPTSearch ? "Home page" : "GPT Search"}
            </button>
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-white"
              alt="userIcon"
              src={user.photoURL}
            />
            <p className="hidden md:inline-block font-bold text-white">
              {user.displayName}
            </p>
            <button
              onClick={handleSignOut}
              className="text-white font-semibold px-3 py-1 rounded-lg border border-white/20 hover:bg-white hover:text-black"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
