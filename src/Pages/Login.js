/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import './Login.css';
import './Home.css';
import theMovieDB from '../util/theMovieDB';

const Login = () => {
  const history = useHistory();

  const handleSubmission = (e) => {
    e.preventDefault();
    // const username = e.target.children[1].value;
    // const password = e.target.children[3].value;

    // Verify if info is correct

    // Direct to browse
    history.push('/browse');
    theMovieDB.requestToken();
  };

  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    handleSubmission(e);
  };

  return (
    <div className="page loginPage">
      <Header loginBtn={false}>
        <Link to="/" className="back-home">
          <p className="back-home"> Back to Home </p>
        </Link>
      </Header>
      <section className="content">
        <form
          onSubmit={handleSubmission}
          className="login-form"
          onKeyDown={handleKeyDown}
        >
          <label>Email</label>
          <input type="email" name="username" required />

          <label>Password</label>
          <input type="password" name="psw" required />

          <button className="btn-login form-btn-login" type="submit">
            Login
          </button>

          <span className="psw">
            <Link to="#">Forgot password?</Link>
            {/* Missing forgot password functionality */}
          </span>
        </form>
      </section>
    </div>
  );
};

export default Login;
