import React from 'react';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Purchase from './views/Purchase';
import Orders from './views/Orders';
import OrderDetails from './views/OrderDetails';
import EditOrder from './views/EditOrder';
import { Link, Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>| {' '}
      <Link to="/about">About</Link>| {' '}
      <Link to="/purchase">Purchase</Link>|{' '}
      <Link to="/orders">Orders</Link>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Purchase path="/purchase" />
        <Orders path="/orders" />
        <OrderDetails path="/orders/:id" />
        <EditOrder path="/orders/:id/edit" />
      </Router>

    </div>
  );
}

export default App;
