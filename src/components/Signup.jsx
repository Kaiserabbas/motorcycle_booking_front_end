import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cleanMessage, signupUser } from '../redux/userSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const [administrator, setAdministrator] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    admin: false,
  });

  const {
    information,
  } = useSelector((state) => state.user);

  return (
    <section className="loginContainer flexV">
      <div className="loginDiv">
        <form
          onSubmit={(el) => {
            el.preventDefault();
            dispatch(signupUser(newUser));
            el.target.reset();
          }}
          className="formContainer flexV"
        >
          <div className="flexV">
            <label htmlFor="name">
              Full Name
              <br />
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(e) => {
                  if (e.target.value.length >= 2) {
                    setNewUser({
                      ...newUser,
                      name: e.target.value,
                    });
                  }
                }}
                minLength={2}
              />
            </label>
          </div>

          <div className="flexV">
            <label htmlFor="email">
              Email
              <br />
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => {
                  setNewUser({
                    ...newUser,
                    email: e.target.value,
                  });
                }}
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
                required
                onChange={(e) => {
                  setNewUser({ ...newUser, password: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="flexV">
            <label htmlFor="admin">
              <h4>Administrator ?</h4>
              <input
                type="checkbox"
                name="admin"
                id="admin"
                onChange={() => {
                  setNewUser({ ...newUser, admin: !administrator });
                  setAdministrator(!administrator);
                }}
              />
            </label>
          </div>

          <div className="loginButtons flexH">
            <button
              id="signUp"
              type="submit"
            >
              Sign up
            </button>
            Or

            <button
              onClick={() => {
                dispatch(cleanMessage());
                navegate('/login');
              }}
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flexV infoContainer">
          {
            information && Array.isArray(information) ? information.map((sms) => (
              <p
                key={(1997 + Math.sin(Math.random() * 10))}
                className="error"
              >
                {sms}
              </p>
            )) : (
              information && (<p className="infoParagraph">{information}</p>)
            )
          }
        </div>
      </div>
    </section>
  );
};

export default Signup;
