import React, { useState } from "react";
import Pregunta from "./components/pregunta";

function App() {
  //definir state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
