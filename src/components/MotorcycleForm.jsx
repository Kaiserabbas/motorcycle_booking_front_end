import { Navigate } from "react-router-dom";

const MotorcycleForm=()=>{
    if(!JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/"/>);
return(
    <h1>the motorcycle form</h1>
)
};

export default MotorcycleForm;