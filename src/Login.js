import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if (!isSignInForm) {
      
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

    } else {
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className=" absolute flex flex-row min-h-screen justify-center items-center">
        <img
          src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bg"
        />
      </div>
      <form
        className="p-8 m-5 absolute bg-black  w-3/12 my-64 mx-96 h-96 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="py-3 font-extrabold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2  my-1 w-full bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-1 w-full bg-gray-500"
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Re-enter password"
            className="p-2 my-1 w-full bg-gray-500"
          />
        )}
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="bg-red-700 p-2 my-7 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h3 onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm
            ? "New here? Sign Up here"
            : "Already an user? Sign In here"}
        </h3>
      </form>
    </div>
  );
};

export default Login;
