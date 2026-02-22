import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import backgroundImage from "../assets/background.png";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { userIcon } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    name: "",
    user: "",
  });
  const dispatch = useDispatch();

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage({});
  };

  const handleSignIn = () => {
    const message = !isSignInForm
      ? checkValidateData(
          email.current.value,
          password.current.value,
          name.current.value,
        )
      : checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message.email || message.name || message.password) return;

    //Sign In Sign Up Logic
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            email: email.current.value,
            photoURL: userIcon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage({ user: error.message });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage({ user: errorCode + "-" + errorMessage });
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage({ user: errorCode + "-" + errorMessage });
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div>
        <img
          className="absolute inset-0 h-full w-full object-cover"
          alt="Background"
          src={backgroundImage}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-6 sm:p-8 md:p-12 bg-black/70 w-full sm:w-11/12 md:w-7/12 lg:w-4/12 h-fit m-auto inset-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Username"
              className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-900 rounded-lg text-sm sm:text-base"
            />
            <p className="text-red-500 font-bold py-2 text-xs sm:text-sm">
              {errorMessage.name}
            </p>
          </>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-900 rounded-lg text-sm sm:text-base"
        />
        <p className="text-red-500 font-bold py-2 text-xs sm:text-sm">
          {errorMessage.email}
        </p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 sm:p-4 my-3 sm:my-4 w-full  bg-gray-900 rounded-lg text-sm sm:text-base"
        />
        <p className="text-red-500 font-bold py-2 text-xs sm:text-sm">
          {errorMessage.password}
        </p>
        <button
          className="bg-red-600 p-3 sm:p-4 my-4 sm:my-6 w-full rounded-lg text-sm sm:text-base font-bold hover:bg-red-700 transition"
          onClick={handleSignIn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold py-2 text-xs sm:text-sm">
          {errorMessage.user}
        </p>
        <p className="cursor-pointer text-xs sm:text-sm" onClick={handleForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already a user ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
