import React from "react";
import LeftButton from "./mainPageComponents/LeftButton";
import RightButton from "./mainPageComponents/RightButton";
import Body from "./mainPageComponents/Body";

const Main = ()=> {
    return(
        <main className="mainContainer">
            <LeftButton/>
            <Body/>
            <RightButton/>
        </main>
    )
}
export default Main;
