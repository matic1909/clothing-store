import React from "react";
import HomePage from "./pages/Homepage";
import ShopPage from "./pages/Shop/Shop";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
