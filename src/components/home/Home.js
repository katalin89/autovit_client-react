import React, { useEffect, useState } from "react";

import Car from "./Car";

import { getAllCars } from "../../services/api";

function Home() {
  const [cars, setCars] = useState([]); //cars=[]; setCars([

  useEffect(() => {
    //se apeleaza de fiecare data cand se incarca pagina
    handleCars();
  }, []);

  async function handleCars() {
    let data = await getAllCars();
    console.log(data) 
    setCars(data);
    console.log(data);
  }

  return (
    <div>
      <h1>Cars</h1>
      <p>
        <a className="button">Create New Car</a>
      </p>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Model</th>
            <th>NrDeLocuri</th>
            <th>Pret</th>
            <th>Culoare</th>
          </tr>
        </thead>
        <tbody>
            
        {cars.length > 0 ? cars.map((e) => <Car car={e} />) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
