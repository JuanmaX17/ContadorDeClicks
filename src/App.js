import './App.css';
import React from 'react';
import {Logo} from "./componentes/Logo/index.logo"
import {Contenedor} from "./componentes/Contenedor/index.contenedor"
import {Contador} from "./componentes/Contador/index.Contador"
import {Boton} from "./componentes/Boton/index.Boton"
import {useState} from "react"
import { Number } from "./componentes/Number/index.number";
import { Letra } from "./componentes/Letra/index.letra";
function App() {

  const [numeroDeClick,setNumeroDeClick] = useState(0)

  const aumentarContador = ()=>{
    setNumeroDeClick(numeroDeClick + 1)
  }
  const reiniciarConteador = ()=>{
    setNumeroDeClick(0)
  }

  return (
     <React.Fragment>

      <Letra />
      <h2>noooooo1212</h2>

      <h2>esssssss</h2>

      <Number />
      <Contenedor>
        <Logo />

        <Contador 
          numeroDeClick={numeroDeClick}
        />
        <Boton 
          claseDeBoton={true}
          texto={numeroDeClick}
          nombre="Clicks"
          manejarClick={aumentarContador}
        />

        <Boton 
          claseDeBoton={false}
          texto={numeroDeClick}
          nombre="Reiniciar"
          manejarClick={reiniciarConteador}
        />

      </Contenedor>
       
     
     </React.Fragment>
  );
}

export default App;
