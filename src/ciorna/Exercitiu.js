import React from "react";

import { useState } from "react";

function Exercitiu() {

    let add="Viorel";

    let[add2,setAdd2]=useState("Viorel2");

    function addName(event){

        console.log(event.target);
    
        setAdd2(add2+"Simon");

        console.log("add "+add);
        console.log("add2 "+add2);
    }

    return (
        <div>
            <button onClick={addName}>Add</button>
    
            <h1>Exercitiu{add}</h1>
            <h1>Exercitiu2{add2}</h1>
            
        </div>
    )
    
    
}


export default Exercitiu;