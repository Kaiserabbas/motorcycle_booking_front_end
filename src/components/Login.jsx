import React, { useState } from 'react';
import '../style/login.css';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import { login_path } from '../urls';


let  res= undefined;
let dataAxios=undefined;

const Login=()=>{
    const [credential,setCredential]=useState({email:'',password:''});
    const [loged,setLoged]=useState(false);
    const navegate=useNavigate();

    const formHandler= async (e)=>{
        e.preventDefault();
        const user={user:{email: credential.email, password: credential.password}};
        try{
            res= await axios.post(login_path,user);
            dataAxios=res.data;
        }
        catch(error){
            if(error.code==="ERR_NETWORK"){
                setLoged(error.message);
            }
        }



        if(dataAxios?.success){
            localStorage.setItem('session_token',JSON.stringify({user:dataAxios.user,token:dataAxios.token}));
        }

        if(localStorage.getItem('session_token')){
            setLoged(dataAxios.message);
        }

        if(dataAxios?.error){
            setLoged(dataAxios.message);
        }
    }    

    // if(loged&&JSON.parse(localStorage.getItem('session_token'))?.token){return <Navigate to="/motorcycles"/> }
    if(JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/motorcycles"/>);
    return(
        <section className='loginContainer flexV'>
            <div className='loginDiv'>
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

            <div className='loginButtons flexH'>
                <button onClick={formHandler} role='button' type='submit' id='loginBtn'>Login</button>
                Or
                <button onClick={()=>{navegate('/signup')}} role='button' type='button'>Sign up</button>
            </div>
        </form>
        </div>
        {loged &&(<p className='infoParagraph'>{loged}</p>)}
        </section>
    );
};

export default Login;
