import React, { useState } from "react";

const AuthModal = ({ setShowModal,  isSignup }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModal(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignup && password !== confirmPassword) {
        setError("Passwords Need to match");
      }

      console.log("make a post request to out database");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="authModal">
      <button className="closeIcon" onClick={handleClick}>
        X
      </button>
      <h2>{isSignup ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By clicking <b>LOG IN</b> you agree to out term and conditions.
        <a href="#"> Learn more</a> about how we process your data and our
        Privecy Policies
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <input
            type="password"
            name="password-check"
            id="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="submit-btn" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
