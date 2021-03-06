import React from 'react';
import './App.css';
import Movies from './components/Movies';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import MovieForm from  './components/MovieForm'
import LoginForm from  './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import FormikLearning from './components/FormikLearning'


function App() {
  return (
    <>
    <NavBar />
    <div className='container'>
      <Switch >
      <Route path='/login' component={LoginForm} />

        <Route path='/movies/:id' component={MovieForm} />
        <Route path='/formik' component={FormikLearning} />
        <Route path='/register' component={RegisterForm} />
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="movies" />
        <Redirect to="not-found" />
      </Switch>
    </div>
    </>
  );
}

export default App;
