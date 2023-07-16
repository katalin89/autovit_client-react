import React from "react";

import {useState} from "react";
function Componenta(){


    let contor=7;

    let [contor2,setContor2]=useState(0);//cu state



    function hadleAction(){
        contor+=1;   
        setContor2(contor2+1);

        console.log("ctr1 "+contor);
        console.log("ctr2 "+contor2);
    }
    



    return(
        <div>
              <button onClick={hadleAction}>Kurtos</button>
            <h1>Componenta {contor}</h1>
            <h1>Componenta2 {contor2}</h1>

        </div>

    )
}
export default Componenta;