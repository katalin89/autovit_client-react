
import React from "react";

import Kati from "./Kati";

import Componeta from "./Componenta";
function Exemplu() {    

    
  function afiseaza() {
    console.log("afiseaza");
  }

  function add(a){
    console.log(a);

  }



    return (
        <div>
            <Kati />
            <h1>Exemplu</h1>
            <p>kati</p>
        </div>
    );
}

export default Exemplu;