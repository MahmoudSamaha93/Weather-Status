// import { BrowserRouter, Link } from 'react-router-dom';
import './Weather.css';

const Weather = (props)=>  {

      try {
        if (props.weatherInfo.weather.length > 0) {
          console.log(props.weatherInfo);
          let tempCelesius = props.weatherInfo.main.temp - 273.15;
          return (
              <div className="row">
                <div className="card text-center w-25 ml-auto mr-auto border-rounded">
                  <div className="card-header text-weight-bolder bg-info">
                    {props.weatherInfo.name} - {props.weatherInfo.sys.country}
                  </div>
                  <div className="card-body bg-light">
                    <h1 className="card-title">{tempCelesius.toFixed(0)} &#8451;</h1>
                    <h3 className="text-primary">{props.weatherInfo.weather[0].description}</h3>
                  </div>
                </div>
              </div>
            )
        }
        else {
          return (
            <div className="row">
                <div className="col-12 text-center">
                    <h4 className="m-5 text-danger">
                        {props.weatherInfo.message}.
                    </h4>
                </div>
            </div>
          )
        }
      }
      catch {
        return (
            <div className="row">
                <div className="col-12 text-center">
                    <h4 className="m-5 text-danger">
                        Try now with correct city name.
                    </h4>
                </div>
            </div>
        );
      }
} 

export default Weather;