import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { motorclesPath, requestHeader } from '../urls';
import ItemPreview from './ItemPreview';

const get = async (postData) => {
  await axios.post(motorclesPath, postData, requestHeader)
    .then((response) => console.log(response.data))
    .catch((error) => console.error('Error:', error.response.statusText));
};

const MotorcycleForm = () => {
  const [newMotorcycle, setNewMotorcycle] = useState({
    name: '',
    color: '',
    chassisNumber: '',
    bookingPricePerHour: '',
    brand: '',
    model: '',
    price: null,
    imageLink: '',
  });

  if (!JSON.parse(localStorage.getItem('session_token'))?.token) return (<Navigate to="/" />);
  return (
    <section className="mainUi">
      <NavBar />
      <div className="addMottorcycleContainer formContainer">
        {/* <header className="mainBodyHeader flexV">
        <h1>ADD NEW MOTORCYCLE</h1>
        <hr className='bar' />
            </header> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(newMotorcycle);
            get(newMotorcycle);
          }}
          className="motorcycleForm"
        >

          <div className="flexV">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Motorcycle's Name"
              onChange={(e) => {
                setNewMotorcycle({
                  ...newMotorcycle,
                  name: e.target.value,
                });
              }}
              minLength={2}
            />
          </div>

          <div className="flexV">
            <input
              type="text"
              name="model"
              id="model"
              placeholder="Motorcycle's Model"
              onChange={(e) => {
                setNewMotorcycle({
                  ...newMotorcycle,
                  model: e.target.value,
                });
              }}
            />
          </div>
          <div className="flexV">
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="Motorcycle's Brand"
              onChange={(e) => {
                setNewMotorcycle({
                  ...newMotorcycle,
                  brand: e.target.value,
                });
              }}
            />

          </div>

          <div className="flexV">
            <input
              type="text"
              name="color"
              id="brand"
              placeholder="Motorcycle's Color"
              onChange={(e) => {
                setNewMotorcycle({
                  ...newMotorcycle,
                  color: e.target.value,
                });
              }}
            />

          </div>

          <div className="flexV">
            <input
              type="text"
              name="chassisNumber"
              id="chassisNumber"
              placeholder="Motorcycle's Chassis Number"
              onChange={(e) => {
                setNewMotorcycle({
                  ...newMotorcycle,
                  chassisNumber: e.target.value,
                });
              }}
            />

          </div>

          <div className="flexV">
            <input
              type="number"
              name="bookingPricePerHour"
              id="bookingPricePerHour"
              placeholder="Motorcycle Booking Price Per Hour $"
              onChange={(e) => {
                setNewMotorcycle({
                  ...newMotorcycle,
                  bookingPricePerHour: e.target.value,
                });
              }}
              step={0.1}
              min={0}
            />

          </div>

          <div className="flexV">
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => {
                setNewMotorcycle({
                  ...newMotorcycle,
                  price: e.target.value,
                });
              }}
              step={0.1}
              min={0}
              placeholder="Motorcycle's Sales Price $"
            />

          </div>

          <div className="flexV">
            <input
              type="url"
              name="imageLink"
              id="imageLink"
              onBlur={(evt) => {
                setNewMotorcycle({ ...newMotorcycle, imageLink: evt.target.value });
              }}
              placeholder="Motorcycle Images 's Link"
            />
          </div>

          <div className="buttonContainer">
            <button
              type="submit"
              onClick={() => {
                console.log('Envuei');
              }}
            >
              Save
            </button>
          </div>
        </form>
        <ItemPreview url={newMotorcycle.imageLink} />
      </div>
    </section>
  );
};

export default MotorcycleForm;
