import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login, resetErrors } from "./redux/actions";
import Cookies from "js-cookie";

//import { postAuthor, resetErrors } from "./redux/actions/index";

const Login = (props) => {
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
    props.login(userData, history);
    // history.push("/channels");
  };

  const { username, password } = userData;

  if (Cookies.get("token")) return <Redirect to="/channels" />; //ASK ASK ASK

  //if (props.user) return <Redirect to="/channels" />;

  //if (!props.user) return <Redirect to="/login" />;

  const errors = props.errors;

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
              <label htmlFor="username" className="">Username</label>
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
              Login
            </button>
            <Link to="/signup" className="btn cards btn-outline-secondary btn-block">
              Signup
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

const mapDispatchToProps = (dispatch) => ({
  resetErrors: () => dispatch(resetErrors()),
  login: (userData, history) => dispatch(login(userData, history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
