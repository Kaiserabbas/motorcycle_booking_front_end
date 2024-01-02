import { currentUser } from "../urls";

const FormReserve=()=>{
    return(
        <form  onSubmit={(e)=>{formHandler(e)}} className='formContainer flexV'>
            <div className='flexV'>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" value={currentUser} id="name" onChange={(e)=>{
                    if(e.target.value.length>=2){
                        setNewUser({...newUser,
                        name:e.target.value})}}
                    }
                 minLength={2} readOnly/>
            </div>

            <div className='flexV'>
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" onChange={(e)=>{setNewUser({...newUser,
                email:e.target.value})}}  />
            </div>

            <div className='flexV'>
                <label htmlFor="motorcycle">Motorcycle</label>
                <select name="motorcycle" id="motorcycle">
                    <option value="vespaA1">Vespa A1</option>
                    <option value="vespaA1">Vespa A1</option>
                    <option value="vespaA1">Vespa A1</option>
                </select>
            </div>

            <div className='flexV'>
            <div className='reserveTime flexH'>
            <div className='flexV'>
                <label htmlFor="date">Reserve Date</label>
                <input type="date" name="date" id="date" onChange={(e)=>{setNewUser({...newUser,
                email:e.target.value})}}  />
            </div>

            <div className='flexV'>
                <label htmlFor="duration">Time</label>
                <input type="time" name="ruration" id="duration" onChange={(e)=>{setNewUser({...newUser,
                email:e.target.value})}}  />
            </div>

            <div className='flexV'>
                <label htmlFor="duration">Total $</label>
                <input type="number" name="total" id="duration" value={0} onChange={(e)=>{setNewUser({...newUser,
                email:e.target.value})}} step={0.5} readOnly />
            </div>
                </div>
                </div>
            <div className="reservebuttonContainer">
                <button onClick={()=>{
                    console.log(newUser);
                }}>Book Now</button>
            </div>
        </form>
    );
};

export default FormReserve;
