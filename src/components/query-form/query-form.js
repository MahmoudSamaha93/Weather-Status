import { Component } from "react";
import Weather from "../weather-data/weather-data";

class QueryForm extends Component {
    constructor() {
        super()
        this.apiKey =  "c05325a25fb64c4b31f0e47c532f76e4"
        this.state = {
          cityName : "",
          weatherData: {}
        }
      }
    
      getData = () => {
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName.toLowerCase()}&appid=${this.apiKey}`;
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({weatherData: data}))
        .catch(err => console.log(err))
        // return this.state.weatherData;
      }
    
      render = () => {
        return (
          <>
              <div className="col-12 mt-5 text-center">
                <form className="form-group ml-auto mr-auto text-center">
                  <input className="form-control rounded rounded-pill text-center mr-auto ml-auto w-50" 
                   type="text" 
                   placeholder="Enter City Name ..."
                   onChange={(e)=>{
                     this.setState({cityName: e.target.value})
                   }}
                  />
                    <input className="form-control rounded rounded-pill text-light btn-dark btn btn-lg m-4 w-25"
                        onClick={()=>{
                            this.getData();
                        }}
                        type="button"
                        value="Get Weather Status"
                    />
                </form>
              </div>
              <div className="col-12 text-center">
                <Weather weatherInfo = {this.state.weatherData}/>
              </div>
              </>
        );
      }
}

export default QueryForm;