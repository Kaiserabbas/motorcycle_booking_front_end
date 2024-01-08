import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../redux/userSlice';

const Logout = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log('currentUser');
  console.log(currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  console.log(' after currentUser');
  console.log(currentUser);

  // if (!JSON.parse(localStorage.getItem('session_token'))?.token) return (<Navigate to="/" />);
  // localStorage.removeItem('session_token');
  return (
    <Navigate to="/login" />
  );
};

export default Logout;
