import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  //definit el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  //funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //Si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="numbre"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
