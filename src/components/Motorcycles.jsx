import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import '../style/mainSection.css'
import { Navigate } from "react-router-dom";
// import axios from "axios";

// const url = 'http://localhost:3000/api/v1/motorcycles';
// const tokenObject = JSON.parse(localStorage.getItem('session_token'));
// const header= {headers: {'Authorization': `Bearer ${tokenObject.token}`,'Content-Type': 'application/json'}}

// const get= async ()=>{
//   const res= await axios.get(url,header);
//   console.log(res.data);
// }

// axios.get(url, {
//   headers: {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json',
//     // Other headers as needed
//   },
// })
//   .then(response => console.log(response.data))
//   .catch(error => console.error('Error:', error));

const Motorcycles = () => {
  if(!JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/"/>);
  return (
    <>
      {(JSON.parse(localStorage.getItem('session_token'))?.token)&&(
        <section className="mainUi">
        <NavBar/>
        <Main/>
      </section>
      )}
    </>
  );
};
export default Motorcycles;
