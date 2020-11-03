import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header";
import SignInAndSignUpPage from "./pages/signInSignUp";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      return function cleanup() {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
