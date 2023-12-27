import { Navigate } from "react-router-dom";
import '../style/reserve.css';


const Reserve=()=>{
    if(!JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/"/>);
    return(
        <div className="reserveContainer flexV">
            <div className="reserveDiv">
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
            </div>
        </div>
    );
};

export default Reserve;
