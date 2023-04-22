import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";


const Weatherapi = () => {
    const [weather, setWeather] = useState(null);
    // const [error,setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://api.weatherapi.com/v1/current.json?key=1d31e14be2ea4077b4d155224232104&q=India&aqi=no')
            .then((res) => {
                console.log(res.data)
                setWeather(res.data);
            })
            .catch((err) => {
                console.log(err);
            });    
    }, []);

    return (

            <>{weather ?
                <div className="weather-box">
                    <div style={{backgroundColor:"#FF4ADE",padding:"10px",textAlign:"center",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>{weather.location.localtime}</div>                    
                    <div className="weather-details">
                      <div>
                        <img src={weather.current.condition.icon} alt="icon" />
                        <h3>{weather.current.condition.text}</h3>
                      </div>
                      <div style={{borderLeft:"0.78px solid #FFFFFF",borderRight:"0.78px solid #FFFFFF"}}>
                        <h2 style={{margin:"5px 30px"}}>{weather.current.temp_c}°C</h2><br></br>
                        <p style={{margin:"5px 30px"}}><i className="fa fa-thermometer-full" aria-hidden="true"></i>&nbsp;{weather.current.pressure_mb}&nbsp;mbar</p>
                      </div>
                      <div >
                      <p><i className="fa-solid fa-wind" aria-hidden="true"></i>&nbsp;{weather.current.wind_kph}Km/h<br></br><span style={{color:"white"}}>Wind</span></p><br></br>
                      <p><i className="fa fa-tint" aria-hidden="true"></i>&nbsp;{weather.current.humidity}%<br></br><span style={{color:"white"}}>Humidity</span></p>
                      </div>
                    </div>
                </div>
            :<div>""</div>}
        </>
    );
};

export default Weatherapi;
