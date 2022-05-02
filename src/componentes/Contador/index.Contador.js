import React from "react";
import "./contador.css"


function Contador({numeroDeClick}){


    return(

        <div className="contador">
            <span className="contador__numero">{numeroDeClick}</span>
        </div>
    )
}

export {
    Contador
}