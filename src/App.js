import React, { useEffect, useState } from "react";
import "./app.css";
import getweather from "./getweather";
import { FaHeart } from "react-icons/fa";

const App = () => {
  const [weatherdata, setweatherdata] = useState("");
  const [city, setcity] = useState("vadodara");
  const [loading, setloading] = useState(false);

  const getData = async () => {
    try {
      setloading(true);
      const data = await getweather(city);
      console.log(data);
      setweatherdata(data);
      setcity("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="app">
        <div className="search">
          <input
            type="text"
            name="text"
            placeholder="Enter Location"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
          <button type="submit" className="btn" onClick={() => getData()}>
            Search here
          </button>
        </div>
        <div className="container">
          <div className="top">
            <div className="location">{weatherdata.name}</div>
            <div className="temp">
              {weatherdata.main ? <h1>{weatherdata.main.temp}°K</h1> : null}
            </div>
            <div className="description">
              {weatherdata.weather ? (
                <p>{weatherdata.weather[0].main}</p>
              ) : null}
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {weatherdata.main ? <p>{weatherdata.main.feels_like}°K</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {weatherdata.main ? <p>{weatherdata.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {weatherdata.wind ? <p>{weatherdata.wind.speed}mph</p> : null}
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
