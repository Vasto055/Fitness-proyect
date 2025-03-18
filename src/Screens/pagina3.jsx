import  React from "react";
import { Cuerpo } from "../Components/Body";
import { Link } from "react-router-dom";

export const Pagina3 = () => {
    return (
        <div>
            <h1>Pagina 3</h1>
            <div style={{ width: '500px', height: '300px', border: '1px solid black', left: "70%", position: 'absolute' }}>
            <Cuerpo />
            </div>
            
        </div>
    );
}
