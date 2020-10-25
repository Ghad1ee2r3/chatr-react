import React, { useState, useEffect } from "react";

import { Link, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signup, resetErrors } from "./redux/actions";

const Signup = (props) => {
  let history = useHistory();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      if (props.errors.length) props.resetErrors();
    };
  }, []);

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signup(userData, history);
  };

  const { username, password } = userData;
  if (props.user) return <Redirect to="/channels" />;

  const errors = props.errors;
  //if (!props.user) return <Redirect to="/channels" />;
  return (
    <div className="col-6 mx-auto">
      <div className="card my-5">
        <div className="card-body cards rounded">
          <form onSubmit={handleSubmit}>
            {!!errors.length && (
              <div className="alert alert-danger" role="alert">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary cards btn-block">
              Signup
            </button>
            <Link to="/login" className="btn cards btn-outline-secondary btn-block">
              I already have an account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, { user }) => {
  return {
    errors: state.errorsState.errors,
    user,
  };
};
//const mapStateToProps = ({user}) => ({user})
const mapDispatchToProps = (dispatch) => ({
  signup: (userData, history) => dispatch(signup(userData, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
