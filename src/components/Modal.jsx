import axios from "axios";
import { useState } from "react";
import { motorcles_path, request_header } from "../urls";

const hideModal=()=>{
    document.querySelector("#deleteModal").classList.add('hideComponent');
    document.querySelector(".bodyContainer").classList.remove('hiddenScroll');
};

const deleteMotorcycle=async ()=>{
    try{
        const result= axios.delete(motorcles_path.concat('/3'),request_header);
        console.log(result.data);
        hideModal();
        alert('apagado com sucesso!')
    }catch(error){
        console.log(error);
    }
        
}



const DeleteModal=()=>{
    const [toDelete,setToDelete]=useState(1); 
return(
    <div className="deleteModalContainer flexV hideComponent" id="deleteModal" onKeyDown={(event)=>{
        if(event.key==='Escape'){
            hideModal();
        }
    }} tabIndex={0}>
        <h1>Are you Sure ?</h1>
        <div className="confirmationButtonsContainer flexH">
            <button id="btnYes" className="modalBtn" onClick={deleteMotorcycle}>YES</button>
            <button id="btnNo" className="modalBtn" onClick={()=>{
                hideModal();
            }}>NO</button>
        </div>
    </div>
)
};

export default DeleteModal;
