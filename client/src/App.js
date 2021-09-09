import "./App.css";
import CarsList from "./Components/CarsList/CarsList";
import AddAgency from "./Components/AddAgency/AddAgency";
import { Switch, Route } from "react-router-dom";
import UserSignUp from "./Components/UserSignUp/UserSignUp";
import UserLogin from "./Components/UserLogin/UserLogin";
import BackOffice from "./Components/Layout/BackOffice";
import FrontOffice from "./Components/Layout/FrontOffice";

function App() {
  return (
    <div>
      <Switch>
        <Route exact  path="/addAgency" render={() => <AddAgency />} />
        <Route exact  path="/signUp" render={() => <UserSignUp />} />
        <Route exact  path="/adminOffice" render={() => <BackOffice />} />
        <Route exact  path="/clientOffice" render={() => <FrontOffice />} />
        <Route exact  path="/carsList" render={() => <CarsList />} />
        <Route exact  path="/" render={() => <UserLogin />} />
      </Switch>
    </div>
  );
}

export default App;
