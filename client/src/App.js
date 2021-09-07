import "./App.css";
import CarsList from "./Components/CarsList/CarsList";
import AddAgency from "./Components/AddAgency/AddAgency";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/allCars" render={() => <CarsList />} />
        <Route path="/addAgency" render={() => <AddAgency />} />
      </Switch>
    </div>
  );
}

export default App;
