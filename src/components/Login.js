import React, { useState } from "react";
import "../admin.css";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const [uname, setUname] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log({ uname, password });
    if (uname === "raunak" && password === "12345") {
      setIsAuthenticated(true);
    } else {
      console.log("Username or Password incorrect");
      setError(true);
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="inner">
        <form>
          {error ? (
            <div className="error">
              <h1>Incorrect Username Or Password</h1>
            </div>
          ) : null}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="uname"
            id="uname"
            onChange={(e) => setUname(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
