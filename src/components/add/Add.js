import React from "react";
import { useState } from "react";
import Car from "../home/Car";
import { addCar } from "../../services/api";
import { Alert } from "react-bootstrap"


function Add() {
  const [marca, setMarca] = useState("");

  const [model, setModel] = useState("");

  const [nrDeLocuri, setNrDeLocuri] = useState("");

  const [pret, setPret] = useState("");

  const [culoare, setCuloare] = useState("");

  let [erors, setErrors] = useState("");
  let [added, setAdded] = useState(false);

  function checkErors() {
    let aux = [];

    if (marca === "") {
      aux.push("You must complete marca");
      aux.style.border="red";
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
    if(erors.length==0){
        let car = { marca, model, nrDeLocuri, pret, culoare };
        console.log(car);
        addCar(car);

        setAdded(true);
    }
   
  }

  return (
    <>

      <div className="errrs">

        {
            erors.length > 0 ? erors.map((e) => <p className="error">{e}</p>) : null
        }

      </div>
      

      <div>
       
        {
          added&&(
            <Alert variant="success" dismissible onClose={() => setAdded(false)}>
          <Alert.Heading>Succes!</Alert.Heading>
          <p>
          You succesfully added new car
          </p>
          
        </Alert>
          )
        }
      </div>

     



     
      <h1>New Car</h1>
      <div className="form-container">
        <p>
        <label for="culoare">Culoare</label>
          <input
            type="text"
            name="culoare"
            onChange={(event) => {
              setCuloare(event.target.value);
            }}
          />
        </p>

        <p>
          <label for="marca">Marca</label>
          <input
            type="text"
            name="marca"
            onChange={(event) => {
              setMarca(event.target.value);
            }}
          />
        </p>

        <p>
          <label for ="model">Model</label>
          <input
            type="text"
            name="model"
            onChange={(event) => {
              setModel(event.target.value);
            }}
          />
        </p>
        <p>
          <label for="nrDeLocuri">nrDeLocuri</label>
          <input
            type="text"
            name="nrDeLocuri"
            onChange={(event) => {
              setNrDeLocuri(event.target.value);
            }}
          />
        </p>

        <p>
           <label for="pret">Pret</label>
          <input
            type="text"
            name="pret"
            onChange={(event) => {
              setPret(event.target.value);
            }}
          />
        </p>
       
        <p>
        <button onClick={handleAddCar}>Create New Car</button>
        </p>
        <p>
          <button >Cancel</button>
        </p>
        
      </div>
    </>
  );
}

export default Add;
