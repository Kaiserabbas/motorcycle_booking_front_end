import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { cleanMessage, loginUser } from '../redux/userSlice';
import '../style/login.css';

const Login = () => {
  const [credential, setCredential] = useState({ email: '', password: '' });
  const navegate = useNavigate();

  const dispatch = useDispatch();
  const {
    currentUser,
    information,
  } = useSelector((state) => state.user);

  if (currentUser) return (<Navigate to="/motorcycles" />);
  return (
    <section className="loginContainer flexV">
      <div className="loginDiv">
        <form
          method="post"
          className="formContainer flexV"
          onSubmit={(el) => {
            el.preventDefault();
            dispatch(loginUser(credential));
          }}
        >
          <div className="flexV">
            <label htmlFor="email">
              Email
              <br />
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setCredential({
                    ...credential,
                    email: e.target.value,
                  });
                }}
                required
              />
            </label>
          </div>

          <div className="flexV">
            <label htmlFor="password">
              Password
              <br />
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setCredential({
                    ...credential,
                    password: e.target.value,
                  });
                }}
                required
              />
            </label>
          </div>

          <div className="loginButtons flexH">
            <button type="submit" id="loginBtn">Login</button>
            Or
            <button
              onClick={() => {
                dispatch(cleanMessage());
                navegate('/signup');
              }}
              type="button"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      {information && (<p className="infoParagraph">{information}</p>)}
    </section>
  );
};

export default Login;
