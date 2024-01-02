import { Navigate } from "react-router-dom";
import '../style/reserve.css';
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from "react";
import FormReserve from "./FormReserve";

library.add(faXmark,faBars);

const Reserve=()=>{
    const [icon,setIcon]=useState("bars");
    if(!JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/"/>);
    return(
        <section className="reserveContainer flexV">
            <header className="flexH">
            <FontAwesomeIcon icon={icon}  onClick={()=>{
                (icon==='bars')?(setIcon('xmark')):(setIcon('bars'));
                document.querySelector('.reseverNavbarContainer').classList.toggle('hide')
            }}/>

            <div className="glassContainer">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="glass"/>
            </div>
            </header>
            <div className="reseveBodyContainer flexH">
                <section className="reseverNavbarContainer hide">
            <NavBar />            
                </section>
            <div className="reserveDiv">
            <FormReserve/>
            </div>
            </div>
        </section>
    );
};

export default Reserve;
