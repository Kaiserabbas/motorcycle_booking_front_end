import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReserves } from '../redux/reserveSlice';
import { currentUser } from '../urls';
import {
  moneyDisplay, timeCalculation, validateTime1, validateTime2,
} from '../timeCalc';

const FormReserve = () => {
  const [totalToPay, setTotalToPay] = useState(0);
  const [timeCheck, setTimeCheck] = useState(false);
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
    motorcycle_id: 7,
    date: null,
    city: null,
  });
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(element) => {
        element.preventDefault();
        dispatch(postReserves(reservation));
        element.target.reset();
      }}
      className="formContainer flexV"
    >
      <div className="flexV">
        <p>Your Name</p>
        <input
          type="text"
          name="name"
          value={currentUser}
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
        <select name="motorcycle" id="motorcycle">
          <option value="vespaA1">Vespa A1</option>
          <option value="vespaA1">Vespa A1</option>
          <option value="vespaA1">Vespa A1</option>
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
              setTotalToPay(0);
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
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * 100).toFixed(2),
                          duration: totalBookHour,
                          date: el.target.value,
                        });
                        setTotalToPay((totalBookHour * 100).toFixed(2));
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
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * 100).toFixed(2),
                          duration: totalBookHour,
                          date: fulldate.fromDate,
                        });
                        setTotalToPay((totalBookHour * 100).toFixed(2));
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
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * 100).toFixed(2),
                          duration: totalBookHour,
                          date: fulldate.fromDate,
                        });
                        setTotalToPay((totalBookHour * 100).toFixed(2));
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
                        setReservation({
                          ...reservation,
                          total: (totalBookHour * 100).toFixed(2),
                          duration: totalBookHour,
                          date: fulldate.fromDate,
                        });
                        setTotalToPay((totalBookHour * 100).toFixed(2));
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
                {totalToPay > 0 && (valid) && (
                  <h3 id="toPay">
                    Total to Pay:
                    {' '}
                    {
                      moneyDisplay(totalToPay)
                    }
                  </h3>
                )}
                {!valid && (
                  <>
                    <br />
                    <p id="invalid">
                      Ensure to Pick a valid Date
                    </p>
                  </>
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
                    }}
                    required
                  />

                </div>

                <div className="flexV">
                  <input
                    type="time"
                    name="ruration"
                    id="duration"
                    placeholder="Pick up a Time"
                    onChange={(element) => {
                      console.log(element.target.value);
                      const hour = element.target.value[0].concat(element.target.value[1]) * 1;
                      const min = element.target.value[3].concat(element.target.value[4]) * 1;
                      const totalBookHour = (hour + min / 60).toFixed(1);
                      setTotalToPay((totalBookHour * 100).toFixed(2));
                      setValid(validateTime1(fulldate.singleDate));
                      setReservation({
                        ...reservation,
                        total: (totalBookHour * 100).toFixed(2),
                        duration: totalBookHour,
                        date: fulldate.singleDate,
                      });
                    }}
                    required
                  />
                </div>
                {totalToPay > 0 && validateTime1(fulldate.singleDate) && (
                  <h3 id="toPay">
                    Total to Pay:
                    {' '}
                    {
                      moneyDisplay(totalToPay)
                    }
                  </h3>
                )}
                {!validateTime1(fulldate.singleDate) && (
                  <>
                    <br />
                    <p id="invalid">
                      Ensure to Pick a valid Date
                    </p>
                  </>
                )}
              </div>

            </div>
          </>
        )
      }

      <div className="reservebuttonContainer">
        {
          totalToPay > 0 && (
            <button
              type="submit"
              onClick={() => {
                console.log(fulldate);
                console.log(totalToPay);
                console.log(reservation);
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
