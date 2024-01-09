import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { postReserves } from '../redux/reserveSlice';
import { getMotorcycles } from '../redux/motorcycleSlice';
import {
  moneyDisplay, timeCalculation, validateTime1, validateTime2,
} from '../timeCalc';

const FormReserve = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const headerRequest = useSelector((state) => state.user.requestHeader);
  const { selectedMotorcycle } = useSelector((state) => state.motorcycle);
  const dispatch = useDispatch();
  const { motorcycles } = useSelector((state) => state.motorcycle);
  const { postSuccess } = useSelector((state) => state.reserve);

  useEffect(() => {
    dispatch(getMotorcycles(headerRequest));
  }, [dispatch]);

  useEffect(() => {
    if (postSuccess) {
      document.querySelector('.formReserve').reset();
    }
  }, [postSuccess]);

  const [toPay, setToPay] = useState(0);
  const [timeCheck, setTimeCheck] = useState(false);
  const [selected, setSelected] = useState(selectedMotorcycle?.id ? selectedMotorcycle : motorcycles[0]);
  const [valid, setValid] = useState(false);
  const [fulldate, setFullDate] = useState({
    fromDate: null,
    fromHour: null,
    toDate: null,
    toHour: null,
    singleDate: null,
  });
  const [reservation, setReservation] = useState({
    duration: 0,
    total: 0,
    motorcycle_id: selected.id,
    date: null,
    city: null,
  });

  return (
    <form
      onSubmit={(element) => {
        element.preventDefault();
        element.target.reset();
      }}
      className="formReserve formContainer flexV"
    >
      <div className="flexV">
        <p>Your Name</p>
        <input
          type="text"
          name="name"
          value={currentUser.name}
          id="name"
          readOnly
          placeholder="Your Name"
        />
      </div>

      <div className="flexV">
        <p>City&apos;s Name</p>
        <input
          onChange={(el) => {
            setReservation({
              ...reservation,
              city: el.target.value,
            });
          }}
          type="text"
          name="city"
          id="city"
          placeholder="Enter the City"
          required
        />
      </div>

      <div className="flexV">
        Please Select a Motorcycle
        <select
          disabled={selectedMotorcycle ? true : ''}
          name="motorcycle"
          id="motorcycle"
          required
          onChange={(el) => {
            const objectItem = JSON.parse(el.target.value);
            setReservation({
              ...reservation,
              motorcycle_id: objectItem.id,
            });
            setSelected(JSON.parse(el.target.value));
            if (fulldate.fromDate && fulldate.fromHour && fulldate.toDate && fulldate.toHour) {
              const fromFullDate = new Date(fulldate.fromDate.concat('T').concat(fulldate.fromHour));
              const toFullDate = new Date(fulldate.toDate.concat('T').concat(fulldate.toHour));
              const totalBookHour = timeCalculation({ fromFullDate, toFullDate });
              const pricePerHour = JSON.parse(el.target.value);
              setReservation({
                ...reservation,
                total: (totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2),
                motorcycle_id: pricePerHour.id,
                duration: totalBookHour,
                date: el.target.value,
              });
              setToPay((totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2));
            }
            if (reservation.duration && reservation.date) {
              const pricePerHour = JSON.parse(el.target.value);
              setReservation({
                ...reservation,
                motorcycle_id: pricePerHour.id,
                total: (reservation.duration * pricePerHour.bookingPricePerHour).toFixed(2),
              });
              setToPay((reservation.duration * pricePerHour.bookingPricePerHour).toFixed(2));
            }
          }}
        >
          {motorcycles.map((motorcycle, index) => (
            index === 0 ? (
              <option
                key={selectedMotorcycle ? selectedMotorcycle.id : motorcycle.id}
                value={JSON.stringify(selected)}
                selected
              >
                {selectedMotorcycle ? selectedMotorcycle.name : motorcycle.name}
              </option>
            )
              : (
                <option
                  key={motorcycle.id}
                  value={JSON.stringify(motorcycle)}
                >
                  {motorcycle.name}
                </option>
              )

          ))}
        </select>
      </div>

      <div className="flexV checkContainer">
        <label htmlFor="daysCheckbox">
          Do you want book for More than one Day?
          {'  '}
          <input
            type="checkbox"
            name="days"
            id="daysCheckbox"
            onClick={() => {
              setToPay(0);
              setTimeCheck(!timeCheck);
              setFullDate({
                fromDate: null,
                fromHour: null,
                toDate: null,
                toHour: null,
                singleDate: null,
              });
            }}
          />
        </label>

      </div>

      {
        timeCheck && (
          <>
            <div className="flexV">
              From: Date & Time
              <div className="reserveTime flexH">
                <div className="flexV">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={(el) => {
                      setValid(validateTime1(el.target.value));
                      if (fulldate.fromHour && fulldate.toDate && fulldate.toHour) {
                        const fromFullDate = new Date(el.target.value.concat('T').concat(fulldate.fromHour));
                        const toFullDate = new Date(fulldate.toDate.concat('T').concat(fulldate.toHour));
                        const totalBookHour = timeCalculation({ fromFullDate, toFullDate });
                        const pricePerHour = selected;
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2),
                          duration: totalBookHour,
                          date: el.target.value,
                        });
                        setToPay((totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2));
                      }
                      setFullDate({
                        ...fulldate,
                        fromDate: el.target.value,
                      });
                    }}
                    required
                  />
                </div>

                <div className="flexV">
                  <input
                    type="time"
                    name="duration"
                    id="duration"
                    placeholder="Pick up a Time"
                    onChange={(element) => {
                      if (fulldate.fromDate && fulldate.toDate && fulldate.toHour) {
                        const fromFullDate = new Date(fulldate.fromDate.concat('T').concat(element.target.value));
                        const toFullDate = new Date(fulldate.toDate.concat('T').concat(fulldate.toHour));
                        const totalBookHour = timeCalculation({ fromFullDate, toFullDate });
                        const pricePerHour = selected;
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2),
                          duration: totalBookHour,
                          date: fulldate.fromDate,
                        });
                        setToPay((totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2));
                      }
                      setFullDate(
                        {
                          ...fulldate,
                          fromHour: element.target.value,
                        },
                      );
                    }}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flexV">
              To: Date & Time
              <div className="reserveTime flexH">
                <div className="flexV">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={(el) => {
                      setValid(validateTime2(fulldate.fromDate, el.target.value));
                      console.log(validateTime2(fulldate.fromDate, el.target.value));
                      if (fulldate.fromHour && fulldate.fromDate && fulldate.toHour) {
                        const fromFullDate = new Date(fulldate.fromDate.concat('T').concat(fulldate.fromHour));
                        const toFullDate = new Date(el.target.value.concat('T').concat(fulldate.toHour));
                        const totalBookHour = timeCalculation({ fromFullDate, toFullDate });
                        const pricePerHour = selected;
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2),
                          duration: totalBookHour,
                          date: fulldate.fromDate,
                        });
                        setToPay((totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2));
                      }
                      setFullDate({
                        ...fulldate,
                        toDate: el.target.value,
                      });
                    }}
                    required
                  />

                </div>

                <div className="flexV">
                  <input
                    type="time"
                    name="duration"
                    id="duration"
                    placeholder="Pick up a Time"
                    onChange={(element) => {
                      if (fulldate.fromHour && fulldate.fromDate && fulldate.toDate) {
                        const toFullDate = new Date(fulldate.toDate.concat('T').concat(element.target.value));
                        const fromFullDate = new Date(fulldate.fromDate.concat('T').concat(fulldate.fromHour));
                        const totalBookHour = timeCalculation({ fromFullDate, toFullDate });
                        const pricePerHour = selected;
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2),
                          duration: totalBookHour,
                          date: fulldate.fromDate,
                        });
                        setToPay((totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2));
                      }
                      setFullDate(
                        {
                          ...fulldate,
                          toHour: element.target.value,
                        },
                      );
                    }}
                    required
                  />
                </div>
                {toPay > 0 && (valid) && (
                  <h3 id="toPay">
                    Total to Pay:
                    {' '}
                    {
                      moneyDisplay(toPay)
                    }
                  </h3>
                )}
              </div>
            </div>
          </>
        )
      }

      {
        !timeCheck && (
          <>
            <div className="flexV">
              Date & Time
              <div className="reserveTime flexH">
                <div className="flexV">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={(el) => {
                      setFullDate({
                        ...fulldate,
                        singleDate: el.target.value,
                      });
                      if (reservation.duration && selected) {
                        const price = selected;
                        setReservation({
                          ...reservation,
                          total: (reservation.duration * price.bookingPricePerHour).toFixed(2),
                          date: el.target.value,
                        });
                        setToPay((reservation.duration * price.bookingPricePerHour).toFixed(2));
                      }
                    }}
                    required
                  />
                </div>

                <div className="flexV">
                  <input
                    type="time"
                    name="duration"
                    id="duration"
                    placeholder="Pick up a Time"
                    onChange={(element) => {
                      console.log(element.target.value);
                      const hour = element.target.value[0].concat(element.target.value[1]) * 1;
                      const min = element.target.value[3].concat(element.target.value[4]) * 1;
                      const totalBookHour = (hour + min / 60).toFixed(1);
                      setReservation({
                        ...reservation,
                        duration: totalBookHour,
                      });
                      if (fulldate.singleDate && selected) {
                        setValid(validateTime1(fulldate.singleDate));
                        const pricePerHour = selected;
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2),
                          duration: totalBookHour,
                          date: fulldate.singleDate,
                        });
                        setToPay((totalBookHour * pricePerHour.bookingPricePerHour).toFixed(2));
                      }
                    }}
                    required
                  />
                </div>
                {toPay > 0 && validateTime1(fulldate.singleDate) && (
                  <h3 id="toPay">
                    Total to Pay:
                    {' '}
                    {
                      moneyDisplay(toPay)
                    }
                  </h3>
                )}
              </div>
            </div>
          </>
        )
      }

      {/* <div className="flexV">
        {!valid && (
          <>
            <br />
            <p id="invalid">
              Ensure to Pick a valid Date
            </p>
          </>
        )}
        {!validateTime1(fulldate.singleDate) && (
          <>
            <br />
            <p id="invalid">
              Ensure to Pick a valid Date
            </p>
          </>
        )}

      </div> */}

      <div className="reservebuttonContainer">
        {
          toPay > 0 && (
            <button
              type="submit"
              onClick={() => {
                console.log(fulldate);
                console.log(toPay);
                console.log(reservation);
                dispatch(postReserves({ header: headerRequest, data: reservation }));
                setFullDate(
                  {
                    fromDate: null,
                    fromHour: null,
                    toDate: null,
                    toHour: null,
                    singleDate: null,
                  },
                );
                setReservation({
                  ...reservation,
                  duration: 0,
                  total: 0,
                  date: null,
                  city: null,
                });
                setToPay(0);
                document.querySelector('.formReserve').reset();
                setTimeCheck(false);
              }}
            >
              Book Now
            </button>
          )
        }
      </div>
    </form>
  );
};

export default FormReserve;
