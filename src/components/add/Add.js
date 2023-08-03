import React from "react";
import { useState } from "react";
import Car from "../home/Car";
import { addCar } from "../../services/api";

function Add() {
  const [marca, setMarca] = useState("");

  const [model, setModel] = useState("");

  const [nrDeLocuri, setNrDeLocuri] = useState("");

  const [pret, setPret] = useState("");

  const [culoare, setCuloare] = useState("");

  let [erors, setErrors] = useState("");

  function checkErors() {
    let aux = [];

    if (marca === "") {
      aux.push("You must complete marca");
    }
    if (model === "") {
      aux.push("You must complete model");
    }

    if (nrDeLocuri === "") {
      aux.push("You must complete nrDeLocuri");
    }
    if (pret === "") {
      aux.push("You must complete pret");
    }
    if (culoare === "") {
      aux.push("You must complete culoare");
    }

    setErrors(aux);
  }

  function handleAddCar() {

    checkErors();
    if(!erors.length>0){
        let car = { marca, model, nrDeLocuri, pret, culoare };
        console.log(car);
        addCar(car);

    }
   
  }

  return (
    <>

      <div className="errrs">

        {
            erors.length > 0 ? erors.map((e) => <p>{e}</p>) : null
        }

      </div>

      <div className="addContainer">
        <label>
          Enter Marca:
          <input
            type="text"
            name="marca"
            onChange={(event) => {
              setMarca(event.target.value);
            }}
          />
        </label>

        <label>
          Enter Model:
          <input
            type="text"
            name="model"
            onChange={(event) => {
              setModel(event.target.value);
            }}
          />
        </label>

        <label>
          Enter NrDeLocuri:
          <input
            type="text"
            name="nrDeLocuri"
            onChange={(event) => {
              setNrDeLocuri(event.target.value);
            }}
          />
        </label>

        <label>
          Enter Pret:
          <input
            type="text"
            name="pret"
            onChange={(event) => {
              setPret(event.target.value);
            }}
          />
        </label>

        <label>
          Enter Culoare:
          <input
            type="text"
            name="culoare"
            onChange={(event) => {
              setCuloare(event.target.value);
            }}
          />
        </label>

        <button onClick={handleAddCar}>Add</button>
      </div>
    </>
  );
}

export default Add;
