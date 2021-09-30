import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MealDetails from "./components/MealDetails/MealDetails";
import Meals from "./components/Meals/Meals";
import Appbar from "./components/Navbar/Appbar";
import Notfound from "./components/NotFound/Notfound";
import "./Style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/meals">
          <Meals />
        </Route>
        <Route exact path="/meal/:mealId">
          <MealDetails />
        </Route>
        <Route exact path="*">
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
