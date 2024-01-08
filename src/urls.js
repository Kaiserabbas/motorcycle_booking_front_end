// const tokenObject = JSON.parse(localStorage.getItem('session_token')) || null;
// const headerArray = [];
// if (tokenObject) {
//   headerArray[0] = { headers:
//   { Authorization: `Bearer ${tokenObject.token}`, 'Content-Type': 'application/json' } };
// }

// const currentUser = tokenObject?.user.name || null;

const motorclesPath = 'http://192.168.43.117:3000/api/v1/motorcycles';
const loginPath = 'http://192.168.43.117:3000/api/v1/login';
const usersPath = 'http://192.168.43.117:3000/api/v1/users/';
const reservationsPath = 'http://192.168.43.117:3000/api/v1/reservations/';
// const requestHeader = headerArray[0];

export {
  motorclesPath,
  loginPath, usersPath,
  reservationsPath,
  // currentUser,
};
