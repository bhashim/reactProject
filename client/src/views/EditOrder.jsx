import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default function EditOrder({ id }) {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [creditcardNumber, setCreditcardNumber] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [cardType, setCardType] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/reactProjects/' + id)
            .then(response => {
                setName(response.data.name);
                setEmail(response.data.email);
                setSubject(response.data.subject);
                setMessage(response.data.message);
                setQuantity(response.data.quantity);
                setShippingAddress(response.data.shippingAddress);
                setCity(response.data.city);
                setState(response.data.state);
                setZipCode(response.data.zipCode);
                setCreditcardNumber(response.data.creditcardNumber);
                setSecurityCode(response.data.securityCode);
                setCardType(response.data.cardType);
                setExpirationDate(response.data.expirationDate);

                setIsLoading(false);
            });
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:8000/api/reactProjects/update/' + id, {
            name,
            email,
            subject,
            message,
            quantity,
            shippingAddress,
            city,
            state,
            zipCode,
            creditcardNumber,
            securityCode,
            cardType,
            expirationDate
        })
            .then(() => navigate('/orders'))
            .catch(console.log)
    }

    if (isLoading) return 'Loading...';

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/orders">back to orders</Link>
            <p>Edit {name}'s Order</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Pet Name:</label>
                    <input name="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Subject:</label>
                    <input name="subject" value={subject} onChange={e => setSubject(e.target.value)} />
                </div>
                <div>
                    <label>Message</label>
                    <input name="message" value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                <div>
                    <label>Quantity</label>
                    <input name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                </div>

                <div>
                    <label>Shipping Address</label>
                    <input name="shippingAddress" value={shippingAddress} onChange={e => setShippingAddress(e.target.value)} />
                </div>
                <div>
                    <label>City</label>
                    <input name="city" value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <div>
                    <label>State</label>
                    <input name="state" value={state} onChange={e => setState(e.target.value)} />
                </div>
                <div>
                    <label>Zip Code</label>
                    <input name="zipCode" value={zipCode} onChange={e => setZipCode(e.target.value)} />
                </div>
                <div>
                    <label>Credit Card Number</label>
                    <input name="creditcardNumber" value={creditcardNumber} onChange={e => setCreditcardNumber(e.target.value)} />
                </div>
                <div>
                    <label>Security Code</label>
                    <input name="securityCode" value={securityCode} onChange={e => setSecurityCode(e.target.value)} />
                </div>

                <div>
                    <label>Card Used</label>
                    <input name="cardType" value={cardType} onChange={e => setCardType(e.target.value)} />
                </div>
                <div>
                    <label>Expiration Date</label>
                    <input name="expirationDate" type="date" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />
                </div>

                <button>Submit</button>
            </form>
        </div>

    )

} 