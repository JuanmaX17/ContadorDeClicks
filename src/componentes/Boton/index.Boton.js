import React from "react";
import "./boton.css"

function Boton({claseDeBoton,manejarClick,nombre}){

    return(

        <button className={claseDeBoton ? "boton__clicks":"boton__reiniciar"} id="boton__general" onClick={manejarClick}>{nombre}</button>

    )
}

export {
    Boton
}