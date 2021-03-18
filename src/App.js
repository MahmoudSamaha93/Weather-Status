import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QueryForm from './components/query-form/query-form';
import './App.css';
import Weather from './components/weather-data/weather-data';

const App = ()=> {
    return (
      <div className = "container">
        <BrowserRouter>
          <div className = "row">
            <div className = "col-12 text-center">
              <h1 className = "head m-5">Weather Status App</h1>
            </div>
          </div>
          <div className="row">
            <Switch>
              <Route exact path = "/" component = { QueryForm } />
              <Route path = "/weather-status" component = { Weather } />
            </Switch>
          </div>
        </BrowserRouter>
        <div className="row text-center">
          <h6 className="text-center ml-auto mr-auto mt-3">
            Copyrights&#169; reserved to <a href="https://linkedin.com/in/engmahmoudsamaha">Mahmoud Samaha</a>
          </h6>
        </div>
      </div>
    );
}

export default App;
