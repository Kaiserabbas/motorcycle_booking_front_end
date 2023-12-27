import React, { useState } from 'react';
import '../style/login.css';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

// const navigateTo=(path)=>{
//     return(
//         <Navigate to ={path}/>
//     )
// }

const Login=()=>{
    const [credential,setCredential]=useState({email:'',password:''});
    const [loged,setLoged]=useState(false);
    const navegate=useNavigate();

    const formHandler= async (e)=>{
        e.preventDefault();
        const user={user:{email: credential.email, password: credential.password}}
        const res= await axios.post("http://localhost:3000/api/v1/login",user);
        const data=res.data;
        if(data?.success){
            localStorage.setItem('session_token',JSON.stringify({user:data.user,token:data.token}));
        }

        if(localStorage.getItem('session_token')){
            setLoged(data.message);
        }

        if(data.error){
            setLoged(data.message);
        }
        console.log(data);
    }    

    // if(loged&&JSON.parse(localStorage.getItem('session_token'))?.token){return <Navigate to="/motorcycles"/> }
    if(JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/motorcycles"/>);
    return(
        <section className='loginContainer flexV'>
        <form  method="post" className='formContainer flexV'>
            <div className='flexV'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e)=>{setCredential({...credential,
                email:e.target.value})}} required/>
            </div>

            <div className='flexV'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e)=>{setCredential({...credential,
                password:e.target.value})}} required/>
            </div>

            <div>
                <button onClick={formHandler} role='button' type='submit'>Login</button>
                <button onClick={()=>{navegate('/signup')}} role='button' type='button'>Signup</button>
                <br />
                {loged &&(<p>{loged}</p>)}
            </div>
        </form>
        </section>
    );
};

export default Login;