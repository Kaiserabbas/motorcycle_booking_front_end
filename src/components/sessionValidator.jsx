import { Navigate } from 'react-router-dom';

const sessionValidator = () => {
  if (!JSON.parse(localStorage.getItem('session_token'))?.token) { return <Navigate to="/" />; }
  return null;
};

export default sessionValidator;
