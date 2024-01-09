// const tokenObject = JSON.parse(localStorage.getItem('session_token')) || null;
// const headerArray = [];
// if (tokenObject) {
//   headerArray[0] = { headers:
//   { Authorization: `Bearer ${tokenObject.token}`, 'Content-Type': 'application/json' } };
// }

// const currentUser = tokenObject?.user.name || null;

const motorclesPath = 'https://motorcyclebooking.onrender.com/api/v1/motorcycles';
const loginPath = 'https://motorcyclebooking.onrender.com/api/v1/login';
const usersPath = 'https://motorcyclebooking.onrender.com/api/v1/users/';
const reservationsPath = 'https://motorcyclebooking.onrender.com/api/v1/reservations/';
// const requestHeader = headerArray[0];

export {
  motorclesPath,
  loginPath, usersPath,
  reservationsPath,
  // currentUser,
};
