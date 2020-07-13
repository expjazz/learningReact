import React from 'react';
import './App.css';
import Movies from './components/Movies';
import { Route } from 'react-router-dom';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='container'>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="not-found" component={NotFound}></Route>
    </div>
  );
}

export default App;
