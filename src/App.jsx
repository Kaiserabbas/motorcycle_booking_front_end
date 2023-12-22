import React from "react";
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from "react-router-dom";
import Motorcycles from "./components/Motorcycles";
import Reserve from "./components/Reserve";
import Reservations from "./components/Reservations";
import MotorcycleForm from "./components/MotorcycleForm";
import DeleteMotorcycles from "./components/DeleteMotorcycles";

const App =()=>{
  return(
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Motorcycles />} />
        <Route exact path="/motorcycles" element={<Motorcycles />} />
        <Route exact path="/motorcycle" element={<MotorcycleForm />} />
        <Route path="/reserve" element={<Reserve/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/delete" element={<DeleteMotorcycles/>} />
      </Routes>
    </div>
  )
}

export default App;
