import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import GlassKeep_Logo from '../GlassKeep_Logo.jpg';

export default function OrderDetails({ id }) {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/reactProjects/' + id)
            .then(response => setOrder(response.data));
    }, []);

    function handleDelete(id) {
        axios.delete('http://localhost:8000/api/reactProjects/delete/' + id)
            // .then(() => setPet(pet.filter(pet => pet._id !== id, navigate('/'))));
            .then(response => navigate('/orders'))
    }
    if (order === null) return 'Loading...';

    return (
        <div>
            <img src={GlassKeep_Logo} alt="GlassKeep_Logo" width={300} />
            <h1>Order Details</h1>
            <Link to="/orders">back to orders</Link>{' '}
            <button onClick={() => handleDelete(order._id)}>Cancel {order.name}'s order</button>{' '}
            <p>Order for: {order.name}</p>
            <p>Email:{order.email}</p>
            <p>Subject:{order.subject}</p>
            <p>Message: {order.message}</p>
            <p>Quantity:{order.quantity}</p>
            <p>Shipping Address:{order.shippingAddress}</p>
            <p>City:{order.city}</p>
            <p>State:{order.state}</p>
            <p>Zip Code:{order.zipCode}</p>
            <p>Credit Card: {order.creditcardNumber}</p>
            <p>Security Code:{order.securityCode}</p>
            <p>Card Used:{order.cardType}</p>
            <p>Expiration Date:{order.expirationDate}</p>
        </div>
    )
}