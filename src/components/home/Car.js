import React from "react";

 function Car({car}) {

  return (
            <tr>
                <td>{car.marca}</td>
                <td>{car.model}</td>
                <td>{car.nrDeLocuri}</td>
                <td>{car.pret}</td>
                <th>{car.culoare}</th>
            </tr>    
  );
}

export default Car;