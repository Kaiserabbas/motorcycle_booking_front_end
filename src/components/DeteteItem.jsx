const DeleteItem = () => {

  return (
    <div className="motorcyclesItemsContainer">
      <div className="motorcycleToDelete flexH">
        <p>Name</p>

        <div className="flexV">   
        <button onClick={()=>{
          document.querySelector("#deleteModal").classList.remove('hideComponent');
          document.querySelector(".bodyContainer").classList.add('hiddenScroll');
        }}>Delete</button>
        </div>
      </div>
    </div>
  )
};

export default DeleteItem;
