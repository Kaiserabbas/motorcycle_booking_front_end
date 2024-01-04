import { Navigate } from 'react-router-dom';
import '../style/deleteMotorcycle.css';
import DeleteItem from './DeteteItem';
import DeleteModal from './Modal';
import NavBar from './NavBar';

const DeleteMotorcycles = () => {
  if (!JSON.parse(localStorage.getItem('session_token'))?.token) return (<Navigate to="/" />);

  return (
    <>
      <DeleteModal />
      <section className="mainUi">
        <NavBar />
        <div>
          <DeleteItem />
          <DeleteItem />
          <DeleteItem />
          <DeleteItem />
          <DeleteItem />
        </div>
      </section>

    </>
  );
};

export default DeleteMotorcycles;
