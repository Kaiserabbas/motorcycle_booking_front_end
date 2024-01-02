import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import { motorcles_path, request_header } from "../urls";
import ItemPreview from "./ItemPreview";




 const get= async (postData)=>{
   await axios.post(motorcles_path,postData,request_header)
   .then(response => console.log(response.data))
   .catch(error => console.error('Error:', error.response.statusText
   ));
 }

 

const MotorcycleForm=()=>{
    const [newMotorcycle,setNewMotorcycle]=useState({
        name: '',
        color:'',
        chassisNumber:'',
        bookingPricePerHour:'',
        brand: '',
        model: '',
        price: null,
        imageLink:''
    });


    if(!JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/"/>);
return(
    <section className="mainUi">
            <NavBar/>
    <div className="addMottorcycleContainer formContainer flexV">
    {/* <header className="mainBodyHeader flexV">
        <h1>ADD NEW MOTORCYCLE</h1>
        <hr className='bar' />
            </header> */}
    <form  onSubmit={(e)=>{
        e.preventDefault();
        // console.log(newMotorcycle);
        get(newMotorcycle)
    }} className='motorcycleForm'>

    <div className='flexV'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={(e)=>{
                setNewMotorcycle({...newMotorcycle,
                name:e.target.value})}
            }
         minLength={2}/>
    </div>

    <div className='flexV'>
        <label htmlFor="model">Model</label>
        <input type="text" name="model" id="model" onChange={(e)=>{
                setNewMotorcycle({...newMotorcycle,
                model:e.target.value})}
            }
        />
    </div>
    <div className='flexV'>
        <label htmlFor="brand">Brand</label>
        <input type="text" name="brand" id="brand" onChange={(e)=>{
                setNewMotorcycle({...newMotorcycle,
                brand:e.target.value})}
            }
         />
    </div>

    <div className='flexV'>
        <label htmlFor="color">Color</label>
        <input type="text" name="color" id="brand" onChange={(e)=>{
                setNewMotorcycle({...newMotorcycle,
                color:e.target.value})}
            }
         />
    </div>

    <div className='flexV'>
        <label htmlFor="chassisNumber">Chassis Number</label>
        <input type="text" name="chassisNumber" id="chassisNumber" onChange={(e)=>{
                setNewMotorcycle({...newMotorcycle,
                chassisNumber:e.target.value})}
            }
         />
    </div>

    <div className='flexV'>
        <label htmlFor="bookingPricePerHour">Booking Price Per Hour $</label>
        <input type="number" name="bookingPricePerHour" id="bookingPricePerHour" onChange={(e)=>{
                setNewMotorcycle({...newMotorcycle,
                    bookingPricePerHour:e.target.value})}
        } step={0.1} min={0}  />
    </div>

    <div className='flexV'>
        <label htmlFor="price">Sale Price $</label>
        <input type="number" name="price" id="price" onChange={(e)=>{
                setNewMotorcycle({...newMotorcycle,
                    price:e.target.value})}} step={0.1} min={0} />
    </div>
    
    <div className='flexV'>
        <label htmlFor="imageLink">Image Link</label>
        <input type="url" name="imageLink" id="imageLink"

                     onBlur={(evt)=>{
                            setNewMotorcycle({...newMotorcycle,imageLink:evt.target.value});
                        }}/>
    </div>

    <div className="buttonContainer">
        <button type="submit" onClick={()=>{
            console.log("Envuei");
        }}>Save</button>
    </div>
</form>
<ItemPreview url={newMotorcycle.imageLink}/>
    </div>
    </section>
)
};

export default MotorcycleForm;