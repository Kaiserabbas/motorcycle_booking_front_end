import React from 'react';
import Home from './components/Home';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import Reservation from './components/Reservation';
import NewMotor from './components/NewMotor';
import RemoveMoter from './components/RemoveMoter';
import Reserve from './components/Reserve';

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/newMoter" element={<NewMotor />} />
      <Route path="/removeMoter" element={<RemoveMoter />} />
      <Route path="/reserve" element={<Reserve />} />
    </Routes>
  </div>
);

export default App;
