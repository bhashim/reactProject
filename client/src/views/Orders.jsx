import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import GlassKeep_Logo from '../GlassKeep_Logo.jpg';

export default function Orders() {
    const [reactProject, setReactProject] = useState(null);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/reactProjects')
            .then(response => setReactProject(response.data))
            .catch(() => setHasError(true));
    }, []);

    if (hasError) return 'Something went wrong!';

    if (reactProject === null) return 'Loading...';

    return (
        <div>
            <img src={GlassKeep_Logo} alt="GlassKeep_Logo" width={300} />
            <h1>Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Shipping Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reactProject.map(order => (
                        <tr key={order._id}>
                            <td>{order.name}</td>{' '}
                            <td>{order.email}</td>{' '}
                            <td>{order.quantity}</td>{' '}
                            <td>{order.shippingAddress}</td>{' '}
                            <td>{order.city}</td>{' '}
                            <td>{order.state}</td>{' '}
                            <td>{order.zipCode}</td>
                            <td> <Link to={"/orders/" + order._id}>Details</Link> |{' '}
                                <Link to={"/orders/" + order._id + "/edit/"}>Edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}