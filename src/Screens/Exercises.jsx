import React from "react";
import "./css/Exercises.css";
import { Cuerpo } from "../Components/Body";
import {  } from "../Components/NavBar";

export const Exercises = () => {
    return(
        <>  
        <heder>
            <center>
            <h1 className='Texts'> Exercises</h1>
            </center>
            <div>
                <h3 className="Texts-2">Aquí podrás elegir un grupo muscular y podrás elegir el ejercicio que mas se acomode para tu rutina</h3>
            </div>
            <Cuerpo/>
        </heder>
        </>
    )
}