/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [buttonProperties, setButtonProperties] = useState(
    "form-control mt-6 flex items-center justify-center"
  );

  const handleButtonJump = () => {
    if (email === "") {
      setShowEmailError(true);
    }
    if (password === "") {
      setShowPasswordError(true);
    }

    // jump button
    if (email === "" || password === "") {
      if (
        buttonProperties ===
        "form-control mt-6 flex items-center justify-center"
      ) {
        setButtonProperties("form-control mt-6 flex items-end justify-center");
      }

      if (
        buttonProperties === "form-control mt-6 flex items-end justify-center"
      ) {
        setButtonProperties(
          "form-control mt-6 flex items-start justify-center"
        );
      }
      if (
        buttonProperties === "form-control mt-6 flex items-start justify-center"
      ) {
        setButtonProperties(
          "form-control mt-6 flex items-center justify-center"
        );
      }
    }
  };

  const handleEmailInputChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    setShowEmailError(false);
  };
  const handlePasswordInputChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setShowPasswordError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    console.log(user);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col min-w-[70%]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card  w-full">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="w-[400px] mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(event) => {
                    handleEmailInputChange(event);
                  }}
                  type="email"
                  placeholder="email"
                  className={`input input-bordered`}
                  defaultValue={""}
                  required
                />
                <p
                  className={`text-red-600 mt-2 ml-3 ${
                    showEmailError ? "" : "hidden"
                  }`}
                >
                  {"Please provide a valid email"}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(event) => {
                    handlePasswordInputChange(event);
                  }}
                  type="password"
                  placeholder="password"
                  defaultValue={""}
                  className={`input input-bordered`}
                  required
                />
                <p
                  className={`text-red-600 mt-2 ml-3 ${
                    showPasswordError ? "" : "hidden"
                  }`}
                >
                  {"Please provide  a Password"}
                </p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
            </div>
            <div className={buttonProperties}>
              <button
                onMouseEnter={handleButtonJump}
                type="submit"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 w-[120px]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
