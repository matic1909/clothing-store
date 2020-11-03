import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header';
import SignInAndSignUpPage from './pages/signInSignUp';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
