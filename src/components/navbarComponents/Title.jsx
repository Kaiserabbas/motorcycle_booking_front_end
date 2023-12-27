import React from "react";
import Logo from '../../img/logo.webp'
import { Navigate } from "react-router-dom";

const Title=()=><div className="titleContainer flexH"><img src={Logo} alt="Logo" onClick={()=>{return <Navigate to="/" />}} /></div>

export default Title;

<picture>
<source type="image/webp" srcSet="path/to/your/image.webp" />

<img src="path/to/your/image.jpg" alt="Alt Text" />
</picture>