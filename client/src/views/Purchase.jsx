import React, { useState } from 'react';
import axios from 'axios';
import GlassKeep_Logo from '../GlassKeep_Logo.jpg';
import GlassKeep_Inst from '../GlassKeep_Inst.jpg';
import {  navigate } from '@reach/router';

export default function Purchase() {
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


    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:8000/api/reactProjects/new', {
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

    return (
        <div>
            <img src={GlassKeep_Logo} alt="GlassKeep_Logo" width={300} />
            <h1 style={{ color: 'blue' }}>Currently, GlassKeep comes individually packaged with the following information.</h1>
            <img src={GlassKeep_Inst} alt="GlassKeep_Inst" width={800} height={500} />
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name:</label>
                    <input name="name" value={name} onChange={e => setName(e.target.value)} />
                    {name.length < 3 ? 'Name must be at least 3' : ''}
                </div>
                <div>
                    <label>Email:</label>
                    <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    {email.length < 3 ? 'Email must be at least 3' : ''}
                </div>
                <div>
                    <label>Subject:</label>
                    <input name="subject" value={subject} onChange={e => setSubject(e.target.value)} />
                    {subject.length < 3 ? 'Subject must be at least 3' : ''}
                </div>
                <div>
                    <label>Message</label>
                    <input name="message" value={message} onChange={e => setMessage(e.target.value)} />
                    {message.length < 3 ? 'Message must be at least 3' : ''}
                </div>
                <div>
                    <label>Quantity</label>
                    <input name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                    {quantity.length < 3 ? 'Quantity must be at least 3' : ''}
                </div>
                <div>
                    <label>Shipping Address</label>
                    <input name="shippingAddress" value={shippingAddress} onChange={e => setShippingAddress(e.target.value)} />
                    {shippingAddress.length < 3 ? 'Shipping Address must be at least 3' : ''}
                </div>
                <div>
                    <label>City</label>
                    <input name="city" value={city} onChange={e => setCity(e.target.value)} />
                    {city.length < 3 ? 'City must be at least 3' : ''}
                </div>
                <div>
                    <label>State</label>
                    <input name="state" value={state} onChange={e => setState(e.target.value)} />
                    {state.length < 3 ? 'State must be at least 3' : ''}
                </div>
                <div>
                    <label>Zip Code</label>
                    <input name="zipCode" value={zipCode} onChange={e => setZipCode(e.target.value)} />
                    {zipCode.length < 3 ? 'Zip Code must be at least 3' : ''}
                </div>
                <div>
                    <label>Credit Card Number</label>
                    <input name="creditcardNumber" value={creditcardNumber} onChange={e => setCreditcardNumber(e.target.value)} />
                    {creditcardNumber.length < 3 ? 'Credit Card Number must be at least 3' : ''}
                </div>
                <div>
                    <label>Security Code</label>
                    <input name="securityCode" value={securityCode} onChange={e => setSecurityCode(e.target.value)} />
                    {securityCode.length < 3 ? 'Security Code must be at least 3' : ''}
                </div>
                <div>
                    <label>Card Used</label>
                    <input name="cardType" value={cardType} onChange={e => setCardType(e.target.value)} />
                    {cardType.length < 3 ? 'Card Type must be at least 3' : ''}
                </div>
                <div>
                    <label>Expiration Date</label>
                    <input name="expirationDate" type="date" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />
                    {expirationDate.length < 3 ? 'Expiration Date must be at least 3' : ''}
                </div>




                <button>Submit</button>
            </form>
        </div>

    )

}
