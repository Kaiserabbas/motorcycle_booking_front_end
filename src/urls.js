const tokenObject = JSON.parse(localStorage.getItem('session_token')) || null;
const headerArray = [];
if (tokenObject) {
  headerArray[0] = { headers: { Authorization: `Bearer ${tokenObject.token}`, 'Content-Type': 'application/json' } };
}

const currentUser = tokenObject?.user.name || null;

const motorclesPath = 'http://localhost:3000/api/v1/motorcycles';
const loginPath = 'http://localhost:3000/api/v1/login';
const usersPath = 'http://localhost:3000/api/v1/users/';
const reservationsPath = 'http://localhost:3000/api/v1/reservations/';
const requestHeader = headerArray[0];

export {
  motorclesPath,
  loginPath, usersPath,
  requestHeader,
  reservationsPath,
  currentUser,
};
