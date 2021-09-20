import React, { useState } from "react";

export default function App() {
  const [listadoDeFrutas, setListadoDeFrutas] = useState([
    "Manzana",
    "Pera",
    "Banana"
  ]);

  //OPCION 1 - FUNCIÓN EXPRESADA
  const agregarFruta = (e) => {
    e.preventDefault();
    let nuevaFruta = e.target.nuevaFruta.value;
    setListadoDeFrutas([...listadoDeFrutas, nuevaFruta]);
    e.target.nuevaFruta.value = "";
  };
  //EN EL COMPONENTE:
  //<form onSubmit={agregarFruta}>

  //OPCIÓN 2 - FUNCIÓN DECLARADA
  function agregarFruta2(e) {
    e.preventDefault();
    let nuevaFruta = e.target.nuevaFruta.value;
    setListadoDeFrutas([...listadoDeFrutas, nuevaFruta]);
    e.target.nuevaFruta.value = "";
  }
  //EN EL COMPONENTE:
  //<form onSubmit={() => agregarFruta2()}>

  //OPCIÓN 3 - ARROW FUNCTION EN EL COMPONENTE
  //<form onSubmit={() => setListadoDeFrutas([...listadoDeFrutas, e.target.nuevaFruta.value])}>
  //NO FUNCIONA PORQUE VUELVE A RENDERIZAR, NO PODEMOS PASAR EL PREVENTDEFAULT

  return (
    <div>
      <h1>Frutas</h1>
      <ul>
        {listadoDeFrutas.map((fruta, i) => {
          return <li key={i}>{fruta}</li>;
        })}
      </ul>
      <form onSubmit={agregarFruta}>
        <input name="nuevaFruta" type="text" /> <br />
        <button>Añadir nueva fruta</button>
      </form>
    </div>
  );
}
