import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';
import ItemPreview from './ItemPreview';
import { getMotorcycles, postMotorcycles, setFalsePostSuccess } from '../redux/motorcycleSlice';
import Message from './Message';

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
    description: '',
  });

  const requestHeader = useSelector((state) => state.user.requestHeader);
  const { information, postSuccess } = useSelector((state) => state.motorcycle);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMotorcycles(requestHeader));
  }, [dispatch]);

  useEffect(() => {
    if (postSuccess) {
      document.querySelector('.motorcycleForm').reset();
    }
  }, [postSuccess]);

  return (
    <section className="mainUi">
      <NavBar />
      <div className="addMottorcycleContainer formContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postMotorcycles({ data: newMotorcycle, header: requestHeader }));
            dispatch(setFalsePostSuccess());
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
            />

          </div>

          <div className="flexV">
            <input
              type="url"
              name="imageLink"
              id="imageLink"
              onChange={(evt) => {
                setNewMotorcycle({ ...newMotorcycle, imageLink: evt.target.value });
              }}
              placeholder="Motorcycle Images 's Link"
              required
            />
          </div>

          <div className="flexV">
            <textarea
              name="description"
              id="description"
              onChange={(evt) => {
                // const newText = evt.target.value;
                // if (newText.length >= 50) {
                  setNewMotorcycle({ ...newMotorcycle, description: evt.target.value });
                // }
              }}
              placeholder="Motorcycle Description"
              required
            />
          </div>

          <div className="buttonContainer">
            <button
              type="submit"
            // onClick={() => {
            //   dispatch(postMotorcycles({ data: newMotorcycle, header: requestHeader }));
            // }}
            >
              Save
            </button>
          </div>
        </form>
        <ItemPreview url={newMotorcycle.imageLink} />
        {information && information !== 'Loading...' && <Message message={information} />}
      </div>
    </section>
  );
};

export default MotorcycleForm;
