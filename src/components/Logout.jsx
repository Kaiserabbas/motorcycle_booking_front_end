import { Navigate } from 'react-router-dom';

const Logout = () => {
  if (!JSON.parse(localStorage.getItem('session_token'))?.token) return (<Navigate to="/" />);
  localStorage.removeItem('session_token');
  return (
    <Navigate to="/" />
  );
};

export default Logout;
