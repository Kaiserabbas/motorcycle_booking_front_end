import axios from "axios";
import { useState } from "react";
import { users_path } from "../urls";

const Signup=()=>{
    const [newUser,setNewUser]=useState({
        name:'',
        email:'',
        password:'',
    });

    const [message,setMessage]=useState(false);

    const formHandler= async (e)=>{
        e.preventDefault();
        try {
            const result= await axios.post(users_path,{user:{...newUser}});
            setMessage({success:true,message:["created successfully!"]});
            console.log(result.data);
        } catch (error) {
            setMessage({error:true,message:error.response.data.message});
        }
    }

    return(
        <section className="signupContainer flexV">
        <form  onSubmit={(e)=>{formHandler(e)}} className='formContainer flexV'>
            <div className='flexV'>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" onChange={(e)=>{
                    if(e.target.value.length>=2){
                        setNewUser({...newUser,
                        name:e.target.value})}}
                    }
                 minLength={2}/>
            </div>

            <div className='flexV'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e)=>{setNewUser({...newUser,
                email:e.target.value})}}  />
            </div>

            <div className='flexV'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e)=>{
                        setNewUser({...newUser,password:e.target.value})}
                        } />
            </div>

            <div>
                <button onClick={()=>{
                    console.log(newUser);
                }}>Sign up</button>
            </div>
        </form>
        <p id="infoLogin"> If you already have an Account please consider to <a href="/login">Login</a></p>

        <div className="flexV infoContainer">
        { message && message?.message.map((sms)=>(<p className={(message?.success)?'success':'error'}>{sms}</p>))}
        </div>
        </section>
    );

};

export default Signup;
