import React from "react";
import "../hojas-de-estilo/Juegos.css";

function Juegos(props) {
  return(
    <div className="contenedor-juegos">
      <img className="portada-juego"
      src={require(`../imagenes/${props.imagenJuego}`)}
      alt={props.altImagen}/>
      <div className="contenedor-texto-juego" id={props.id}>
        <p className="nombre-juego">{props.nombreJuego}</p>
        <p className="info-juego">{props.infoJuego}</p>
        <p className="nombre-estudio">{props.estudio}</p>
      </div>
    </div>
  );
}

export default Juegos;