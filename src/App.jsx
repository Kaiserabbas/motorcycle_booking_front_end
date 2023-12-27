import React from "react";
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Motorcycles from "./components/Motorcycles";
import Reserve from "./components/Reserve";
import Reservations from "./components/Reservations";
import MotorcycleForm from "./components/MotorcycleForm";
import DeleteMotorcycles from "./components/DeleteMotorcycles";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import MotorcycleDetails from "./components/MotorcycleDetails";

const App =()=>{
  return(
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/motorcycles" element={<Motorcycles />} />
        <Route exact path="/motorcycle" element={<MotorcycleForm />} />
        <Route path="/motorcycle/:id" element={<MotorcycleDetails />} />
        <Route path="/reserve" element={<Reserve/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/delete" element={<DeleteMotorcycles/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App;
