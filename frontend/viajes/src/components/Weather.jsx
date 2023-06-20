import { useState, useEffect } from "react";
import { Card } from "@mui/material";

import "../App.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [state, setState] = useState();
  const [getState, setGetState] = useState();

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=ed9a274bc3da6f55f4cef9ade3e0f4b1&units=metric`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [API_URL]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
    console.log("aca", state);
  };
  return (
    <div className="container">
      <div className="package-title">
        <h2>Consulta el Pronostico</h2>
      </div>
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
        <div className="col-form-label">
          <h3>Ingresa el destino :</h3>
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="location-name"
            className="form-control"
            onChange={inputHandler}
            value={getState}
          />
        </div>
        <button className="btn-search" onClick={submitHandler}>
          Buscar
        </button>
      </div>
      <div>
        <br></br>
        <br></br>
        <Card style={{ height: 350, width: 1400, mx: "auto" ,backgroundColor:"#87CEFA"}}>
          {data.main ? (
            <div className="card-body text-center">
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
              <p className="h2">{data.main.temp}&deg; C</p>
              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{" "}
                <strong>{data.name}</strong>
              </p>
              <br></br>
              <div className="row mt-4">
               <br></br>
               <br></br>
                <div className="col-md-6">
                  <p>
                    {"Probabilidad : "}
                    <strong>{data.weather[0].main}</strong>
                  </p>
                  <p>
                  {"Country : "}
                    <strong> {data.sys.country}</strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </Card>
      </div>
    </div>
  );
};
export default Weather;
