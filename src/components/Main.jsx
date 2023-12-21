import React from "react";

const Main = ()=> {
    return(
        <main className="mainContainer">
            <div className="mainButton flexV">
                <div className="buttonContainerLeft flexH">
            <button>{"<-"}</button>
                </div>
            </div>
            <div className="mainBody flexV">
            <h1>Lastest Model</h1>
            </div>
            <div className="mainButton flexV">
            <div className="buttonContainerRight flexH">
            <button>{"->"}</button>
                </div>
            </div>
        </main>
    )
}
export default Main;
