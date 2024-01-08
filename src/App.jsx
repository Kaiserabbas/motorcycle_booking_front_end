import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import Motorcycles from './components/Motorcycles';
import Reserve from './components/Reserve';
import Reservations from './components/Reservations';
import MotorcycleForm from './components/MotorcycleForm';
import DeleteMotorcycles from './components/DeleteMotorcycles';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import MotorcycleDetails from './components/MotorcycleDetails';
import { setIconUser, setnewIconUser } from './redux/userSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIconUser());
  }, [dispatch]);

  const restoreIcon = useSelector((state) => state.user.icon);
  const currentUser = useSelector((state) => state.user.currentUser);

  library.add(faXmark, faBars);
  return (
    <>
      <div className="app">
        {
          currentUser && (
            <div className="hamburguerContainer">
              <FontAwesomeIcon
                icon={restoreIcon}
                id="hamburrguerIcon"
                onClick={() => {
                  if (restoreIcon === 'bars') {
                    dispatch(setnewIconUser('xmark'));
                    // setIcon('xmark');
                  } else {
                    dispatch(setnewIconUser('bars'));
                  }
                  document.querySelector('.navContainer').classList.toggle('controlVisibility');
                }}
              />
            </div>
          )
        }
        <div id="mainContainer">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/motorcycles" element={<Motorcycles />} />
            <Route exact path="/motorcycle" element={<MotorcycleForm />} />
            <Route path="/motorcycle/:id" element={<MotorcycleDetails />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/delete" element={<DeleteMotorcycles />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
