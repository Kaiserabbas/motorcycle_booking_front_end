import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import '../style/mainSection.css'
import axios from "axios";

const get= async ()=>{
  const user={user:{email: "gracianomanuelhenrique@gmail.com", password: "madarauchia1997!"}}
  
  const res= await axios.post("http://localhost:3000/api/v1/login",user);
  const data=res.data;
  console.log(data)
}

const Motorcycles = () => {
  get();
  return (
    <section className="mainUi">
      <NavBar/>
      <Main/>
    </section>    
  );
};
export default Motorcycles;
