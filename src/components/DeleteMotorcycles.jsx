import { Navigate } from "react-router-dom";


const DeleteMotorcycles= ()=>{
    if(!JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/"/>);
    return(
        <h1>
            I will delete all the motorcycles!
        </h1>
    );
};

export default DeleteMotorcycles;
