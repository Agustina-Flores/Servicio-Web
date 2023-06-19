import { useState, useEffect } from "react";
 import { Card } from "@mui/material";
import { FaTemperatureLow ,FaTemperatureHigh } from "react-icons/fa";


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
    console.log("aca" , state)
  };
  return (
    <div className="container">
      <h2>React Weather App</h2>
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
        <label className="col-form-label">Ingresa la ciudad :</label>
        <div className="col-auto">
          <input
            type="text"
            id="location-name"
            className="form-control"
            onChange={inputHandler}
            value={getState}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={submitHandler}>
          Search
        </button>
      </div>
      <div>
        <br></br>
        <br></br>
        <Card style={{ height: 400, width: 1400, mx: "auto" }}>
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
              <div className="row mt-4">
              <div className="col-md-6">
              <p>
                <FaTemperatureLow> 
                  <strong>
                    {(data.main.temp_min)}&deg; C
                  </strong>
                  </FaTemperatureLow>
                </p>
                
                <p>
                   <FaTemperatureHigh> 
                  <strong>
                    {(data.main.temp_max)}&deg; C
                  </strong>
                  </FaTemperatureHigh>
                </p>
              </div>
              
              <div className="col-md-6">
                <p>
                  {' '}
                  <strong>{data.weather[0].main}</strong>
                </p>
                <p>
                  <strong>
                    {' '}
                    {data.sys.country}
                  </strong>
                </p>
                
              </div>
            </div>
            </div>
          ) : (
            <h1>No existe este destino</h1>
          )}
        </Card>
      </div>
    </div>
  );
};
export default Weather;
