import axios from 'axios';
import { useState } from 'react';
import { usersPath } from '../urls';

const Signup = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(false);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(usersPath, { user: { ...newUser } });
      setMessage({ success: true, message: ['created successfully!'] });
      console.log(result.data);
    } catch (error) {
      setMessage({ error: true, message: error.response.data.message });
    }
  };

  return (
    <section className="loginContainer flexV">
      <div className="loginDiv">
        <form onSubmit={(e) => { formHandler(e); }} className="formContainer flexV">
          <div className="flexV">
            <label htmlFor="name">
              Full Name
              <br />
              <input
                type="text"
                name="name"
                id="name"
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
                onChange={(e) => {
                  setNewUser({ ...newUser, password: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="loginButtons flexH">
            <button
              id="signUp"
              onClick={() => {
                console.log(newUser);
              }}
              type="submit"
            >
              Sign up
            </button>
            Or
            <a href="/login">
              <button type="button">Login</button>
            </a>

          </div>
        </form>
        <div className="flexV infoContainer">
          {message && message?.message.map((sms, index) => (<p key={{ index }} className={(message?.success) ? 'success' : 'error'}>{sms}</p>))}
        </div>
      </div>

    </section>
  );
};

export default Signup;
