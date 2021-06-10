import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


import { Switch, Route } from 'react-router-dom';

const HatsPage = ()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route exact={true} path='/shop' component={ ShopPage } />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
  );
}

export default App;
